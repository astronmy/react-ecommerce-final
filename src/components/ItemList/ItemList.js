import { Container } from 'react-bootstrap'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return (
        <Container>
            <div className='row justify-content-center'>
                {products.map(product => <Item key={product.id} {...product} ></Item>)}
            </div>
        </Container>
    )
}

export default ItemList