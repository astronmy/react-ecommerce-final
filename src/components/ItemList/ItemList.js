import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div className='products'>
            {products.map(product => <Item key={product.id} {...product} ></Item>)}
        </div>
    )
}

export default ItemList