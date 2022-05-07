
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { useNotification } from '../../notification/notification'
import { getProducts } from '../../services/firebase/firestore'
import { Container, Spinner } from 'react-bootstrap'

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { setNotification } = useNotification()
    const { categoryId } = useParams()

    useAsync(
        setLoading,
        () => getProducts(categoryId),
        setProducts,
        () => setNotification('error', 'No se pudieron cargar los productos. Por favor intente luego'),
        [categoryId]
    )

    if (loading) {
        return (
            <Container className='d-flex mt-5 justify-content-center'>
                <Spinner className='me-3' animation="border" variant='primary'/>
                <h4 className='text-muted'>Obteniendo Productos..</h4>
            </Container>
        )
    }

    if (products.length === 0) {
        return <p className='mt-5 fs-2'>No se encontraron productos</p>
    }

    return (
        <Container className='ItemListContainer'>
            <h4 className='text-center m-4'>{greetings}</h4>
            {
                !loading && <ItemList products={products}></ItemList>
            }
        </Container>
    )
}

export default ItemListContainer