
const CartItem = ({ id, name, img, price, quantity, onRemove}) => {

    return (
        <div className="carrito__item">
            <h4 className="carrito__item__title"><span>{name}</span></h4>
            <h4 className="carrito__item__title"><span>Cantidad:</span> {quantity}</h4>
            <h4 className="carrito__item__title"><span>Precio Unitario:</span> ${price}</h4>
            <h4 className="carrito__item__title"><span>Subtotal:</span> ${price * quantity}</h4>
            <a onClick={() => onRemove(id)}><i class="fa-solid fa-trash"></i></a>
        </div>
    )

}

export default CartItem