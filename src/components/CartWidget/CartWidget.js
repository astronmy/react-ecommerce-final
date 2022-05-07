import CartContext from '../../context/CartContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    
    if(getQuantity() === 0) {
        return (
            <div></div>
        )
    }
    return(
        <Link to={'/cart'} className="CartWidget text-light text-decoration-none fs-5">
            <i class="fa-solid fa-cart-shopping text-light"></i>&nbsp;
            { getQuantity() }
        </Link>
    );
}

export default CartWidget