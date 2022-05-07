
import ItemList from '../ItemList/ItemList'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { useNotification } from '../../notification/notification'
import { getProducts } from '../../services/firebase/firestore'

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { setNotification } = useNotification()
    const { categoryId } = useParams()

    useAsync(
        setLoading,
        () => getProducts(categoryId),
        setProducts,
        () => setNotification('error', 'No se pudieron cargar los productos. Por favor intente luego'),
        [categoryId]
    )

    if (loading) {
        return (
            <>
                <h1>Cargando...</h1>
            </>
        )
    }

    if (products.length === 0) {
        return <h1>No se encontraron productos!</h1>
    }

    return (
        <div className="container">
            <h4 className='title'>{greetings}</h4>
            {
                loading ? <h1 className='loading'>Cargando ...</h1> : <ItemList products={products}></ItemList>
            }
        </div>
    )
}

export default ItemListContainer