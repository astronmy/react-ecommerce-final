
import CartContext from '../../context/CartContext'
import { useContext, useState } from "react"
import { Container, Spinner } from 'react-bootstrap'
import { createOrderAndUpdateStock } from '../../services/firebase/firestore'
import { useNotification } from '../../notification/notification'
import { Link } from 'react-router-dom'

const CheckoutForm = () => {
  const { setNotification } = useNotification()
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)



  const createOrder = () => {

    if (!(name && email && phone)) {
      setNotification('error', `Complete los datos del formulario para procesar la orden`);
      return;
    }
    setLoading(true)

    const objOrder = {
      buyer: {
        name,
        phone,
        email
      },
      items: cart,
      total: getTotal()
    }

    createOrderAndUpdateStock(cart, objOrder).then(id => {
      clearCart()
      setNotification('success', `La orden se genero correctamente, su codigo de orden es: ${id}`)
    }).catch((error) => {
      if (error && error.name === 'outOfStockError' && error.products.length > 0) {
        const stringProducts = error.products.map(prod => prod.dataDoc.name).join(', ')

        setNotification('error', `${error.products.length > 1 ? 'Los productos' : 'El producto'} ${stringProducts} no ${error.products.length > 1 ? 'tienen' : 'tiene'} stock`)
      } else {
        setNotification('error', error)
      }
    }).finally(() => {
      setLoading(false)
    })
  }

  if (getQuantity() === 0) {
    return (
      <>
        <p className='mt-5 fs-2'>No hay items en el carrito</p>
        <Link to={`/`} className='btn btn-success'>
          Seguir Comprando
        </Link>
      </>
    )
  }

  if (loading) {
    return (
      <Container className='mt-5'>
        <Spinner className='me-3' animation="border" variant='primary' />
        <h4 className='text-muted'>Se esta procesando la orden ...</h4>
      </Container>
    )
  }

  return (
    <Container className='mt-5'>
      <div className='mx-auto col-12 col-md-7 card p-3 p-md-5 shadow-sm'>
        <h4 className='text-muted my-4'>Complete los datos para procesar la orden</h4>
        <div class="my-3">
          <label for="fullname" class="form-label fw-bolder">Nombre Completo</label>
          <input type="text" class="form-control" id="fullname" placeholder="John Connor" onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label fw-bolder">Dirección de Correo Electrónico</label>
          <input type="email" class="form-control" id="email" placeholder="name@sumail.com" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label fw-bolder">Télefono de Contacto</label>
          <input type="tel" class="form-control" id="phone" placeholder="+542616485681" onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div class="mb-3 mt-5">
          <button className='btn btn-success p-3' onClick={createOrder}>Registrar Compra</button>
        </div>
      </div>
    </Container>
  )
}

export default CheckoutForm