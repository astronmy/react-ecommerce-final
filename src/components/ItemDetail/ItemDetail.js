import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useNotification } from '../../notification/notification'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0)

  const { addItem } = useContext(CartContext)
  const { setNotification } = useNotification()

  const handleOnAdd = (count) => {
    console.log('agregue al carrito')
    setQuantity(count)
    addItem({ id, name, price }, count)
    setNotification('success', 'Se agregaron correctamente los productos al carrito')
  }

  return (
    <article className="product">
      <picture className="product__image">
        <img src={img} alt="product image" />
      </picture>
      <div className="product__info">
        <h1 className="product__title">{name}</h1>
        <h3 className="product__price">{price}</h3>
      </div>
      <footer>
        {quantity === 0 ? <ItemCount stock={stock} onAdd={handleOnAdd} /> : <Link to='/cart' className='carrito'>Ir al carrito</Link>}
      </footer>
    </article>
  )
}

export default ItemDetail;