import { 
  getDocs, 
  collection, 
  where, 
  limit, 
  writeBatch, 
  query, 
  doc, 
  getDoc, 
  documentId, 
  addDoc,
  Timestamp 
} from 'firebase/firestore' 
import { firebaseStorage } from './config'
import { createAdaptedProduct } from '../../adapters/productAdapter'
import { createAdaptedCategory } from '../../adapters/categoryAdapter'

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
      const collectionRef = categoryId
      ? query(collection(firebaseStorage, 'products'), where('category', '==', categoryId), limit(10))
      : collection(firebaseStorage, 'products')

      getDocs(collectionRef).then(querySnapshot => {
          const products = querySnapshot.docs.map(doc => {
              return createAdaptedProduct(doc)
          })
          resolve(products)
      }).catch(error => {
          reject(error)
      })
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
      const docRef = doc(firebaseStorage, 'products', productId)
  
      getDoc(docRef).then(querySnapshot => {
          const product = createAdaptedProduct(querySnapshot)
          resolve(product)
      }).catch(error => {
          reject(error)
      })
  })
}

export const createOrderAndUpdateStock = (cart, objOrder) => {
  return new Promise((resolve, reject) => {

      const objOrderWithTimestamp = {
          ...objOrder,
          date: Timestamp.fromDate(new Date())
      }

      const batch = writeBatch(firebaseStorage)
      const outOfStock = []

      const ids = cart.map(prod => prod.id)
      const collectionRef = collection(firebaseStorage, 'products') 

      getDocs(query(collectionRef, where(documentId(), 'in', ids)))
          .then(response => {
              response.docs.forEach(doc => {
                  const dataDoc = doc.data()
                  const prodQuantity = objOrder.items.find(prod => prod.id === doc.id).quantity

                  if(dataDoc.stock >= prodQuantity) {
                      batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                  } else {
                      outOfStock.push({ id: doc.id, dataDoc})
                  }
              })
          }).then(() => {
              if(outOfStock.length === 0) {
                  const collectionRef = collection(firebaseStorage, 'orders')
                  return addDoc(collectionRef, objOrderWithTimestamp)
              } else {
                  return Promise.reject({ name: 'outOfStockError', products: outOfStock})
              }
          }).then(({ id }) => {
              batch.commit()
              resolve(id)
          }).catch(error => {
              resolve(error)
          })
  })
}

export const getCategories = () => {
  return new Promise((resolve, reject) => {
      const collectionRef = collection(firebaseStorage, 'categories')

    getDocs(collectionRef).then(querySnapshot => {
      const categories = querySnapshot.docs.map(doc => {
          return createAdaptedCategory(doc)
      })
      resolve(categories)
      }).catch(error => {
          reject(error)
      })
  })
}