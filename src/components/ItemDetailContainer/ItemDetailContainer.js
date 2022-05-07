import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/firebase/firestore'
import { Container, Spinner } from 'react-bootstrap'

const ItemDetailContainer = ({ addToCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProductById(productId).then(prod => {
            setProduct(prod)
        }).catch(error => {
        }).finally(() => {
            setLoading(false)
        })

    }, [productId])

    if (loading) {
        return  <Container className='mt-5'>
                    <Spinner className='me-3' animation="border" variant='primary' />
                    <h4 className='text-muted'>Cargando Producto..</h4>
                </Container>
    }

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} addToCart={addToCart} cart={cart} />
        </div>
    )
}

export default ItemDetailContainer