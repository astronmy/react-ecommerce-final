import './Item.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {

    return (
        <Card style={{ width: '18rem' }} className="mx-3 my-2 shadow-sm ">
            <img src={img} className="ItemImg mt-3" alt={name}></img>
            <Card.Body>
                <Card.Title className='text-center'>{name}</Card.Title>
                <Card.Text className='text-center fw-bold fs-3'>
                    $ {price}
                </Card.Text>
                <Link to={`/detail/${id}`} className='btn btn-success'>
                    Ver Detalle
                </Link>
            </Card.Body>
        </Card>
    )

}

export default Item