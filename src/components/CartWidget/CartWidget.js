import './CartWidget.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    
    if(getQuantity() === 0) {
        return (
            <div></div>
        )
    }
    return(
        <Link to={'/cart'} className="CartWidget">
            <i class="fa-solid fa-cart-shopping"></i>&nbsp;
            { getQuantity() }
        </Link>
    );
}

export default CartWidget