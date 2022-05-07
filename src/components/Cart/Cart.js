
import CartItem from '../CartItem/CartItem'
import CartContext from '../../context/CartContext'
import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Container, Spinner } from 'react-bootstrap'

const Cart = () => {

    const { cart, clearCart, getTotal, getQuantity, removeItem } = useContext(CartContext)
    const navigate = useNavigate();

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
                <button className='btn btn-secondary' onClick={() => { navigate('/checkout'); }} >Finalizar Compra</button>
            </div>
        </Container>
    )
}

export default Cart