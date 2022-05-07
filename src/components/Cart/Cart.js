
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import CartContext from '../../context/CartContext'
import { useContext, useState } from "react"
import { useNavigate  } from 'react-router-dom'
import { useNotification } from '../../notification/notification'
import { createOrderAndUpdateStock } from '../../services/firebase/firestore'

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
            <h1>No hay items en el carrito</h1>
        )
    }
    return (
        <div>
            <h1>Carrito</h1>
            <section className="cart-content">
                {cart.map(prod => <CartItem key={prod.id} {...prod} onRemove={removeItem} />)}
            </section>
            <h2 className='total__import'>Total: $ {getTotal()}</h2>
            <div className='buttonbar'>
                <button className='btnEmpty' onClick={clearCart}>Cancelar Compra</button>
                <button className='btnEmpty' onClick={() => { navigate('/'); }}>Seguir Comprando</button>
                <button className='btnEmpty' onClick={createOrder} >Finalizar Compra</button>
            </div>
        </div>
    )
}

export default Cart