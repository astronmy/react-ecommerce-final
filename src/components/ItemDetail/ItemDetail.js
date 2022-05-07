import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { useNotification } from '../../notification/notification'
import { Card, Container } from 'react-bootstrap'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0)

  const { addItem } = useContext(CartContext)
  const { setNotification } = useNotification()

  const handleOnAdd = (count) => {
    setQuantity(count)
    addItem({ id, name, price }, count)
    setNotification('success', 'Se agregaron correctamente los productos al carrito')
  }

  return (
    <Container className='my-5 d-flex flex-column align-items-center flex-lg-row align-items-lg-stretch justify-content-lg-center '>
      <Card className="mx-1 my-2 shadow-sm col-lg-8 col-11">
        <img src={img} className="ItemDetailImg" alt={name}></img>
        <Card.Body>
          <h4>Descripción</h4>
          <p className='text-start p-2'>{description}</p>
        </Card.Body>
      </Card>

      <Card className="mx-1 my-2 shadow-sm col-lg-4 col-11">
        <Card.Body>
          <Card.Title className='text-center fs-2 mt-3 border-bottom p-2'>{name}</Card.Title>
          <p className='text-center fs-1 p-2 border-bottom'>${price}</p>
          {quantity === 0
            ? <ItemCount stock={stock} onAdd={handleOnAdd} />
            : <Link to='/cart' className='btn btn-success col-6 mb-4'>Ir al carrito</Link>
          }
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ItemDetail;