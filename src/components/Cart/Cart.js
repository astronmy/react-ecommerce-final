
import CartItem from '../CartItem/CartItem'
import CartContext from '../../context/CartContext'
import { useContext, useState } from "react"
import { useNavigate  } from 'react-router-dom'
import { useNotification } from '../../notification/notification'
import { createOrderAndUpdateStock } from '../../services/firebase/firestore'
import { Container } from 'react-bootstrap'

const Cart = () => {

    const { setNotification } = useNotification()
    const { cart, clearCart, getTotal, getQuantity, removeItem } = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate ();

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: {
                name: 'Renzo Vinci',
                phone: '32504755',
                email: 'renzvinci@gmail.com'
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
                console.log(error)
            }
        }).finally(() => {
            setLoading(false)
        })
    }

    if (loading) {
        return <h1>Se esta procesando la orden</h1>
    }

    if (getQuantity() === 0) {
        return (
            <p className='mt-5 fs-2'>No hay items en el carrito</p>
        )
    }
    return (
        <Container className='mt-5 d-flex flex-column justify-content-center'>
            <p className='fs-2 mb-4'>Carrito</p>
            <Container className='justify-self-center'>
                {cart.map(prod => <CartItem key={prod.id} {...prod} onRemove={removeItem} />)}
            </Container>
            <h2 className='mt-4'>Total: $ {getTotal()}</h2>
            <div className="col-12 col-md-6 btn-group my-4 mx-auto" role="group">
                <button className='btn btn-danger' onClick={clearCart}>Cancelar Compra</button>
                <button className='btn btn-success' onClick={() => { navigate('/'); }}>Seguir Comprando</button>
                <button className='btn btn-secondary' onClick={createOrder} >Finalizar Compra</button>
            </div>
        </Container>
    )
}

export default Cart