
const CartItem = ({ id, name, img, price, quantity, onRemove}) => {

    return (
        <div className="row mb-2 mb-md-0 border border-rounded p-3 bg-light">
            <h4 className="col-12 col-md-4"><span className="fs-5">{name}</span></h4>
            <h4 className="col-12 col-md-2"><span className="fs-5">Cantidad:</span> {quantity}</h4>
            <h4 className="col-12 col-md-3"><span className="fs-5">Precio Unitario:</span> ${price}</h4>
            <h4 className="col-12 col-md-2"><span className="fs-5">Subtotal:</span> ${price * quantity}</h4>
            <button className="col-12 col-md-1 border-0 bg-light" href="#" onClick={() => onRemove(id)}><i className=" btn btn-outline-danger fa-solid fa-trash"></i></button>
        </div>
    )

}

export default CartItem