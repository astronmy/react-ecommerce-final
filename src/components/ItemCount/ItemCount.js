import { useState } from 'react'
import { Container } from 'react-bootstrap'

const ItemCount = ({ initial = 0, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (stock > count) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    if(stock === 0) {
        return <button className='btn-discount' disabled>Sin stock</button>
    }

    return (
        <Container>
            <div className='my-3'>
                <button className='btn btn-secondary' onClick={decrement}> - </button>
                <span className='fs-5 mx-2'>{count}</span>
                <button className='btn btn-secondary' onClick={increment}> + </button>
            </div>
            <button className={`btn btn-secondary col-lg-6 col-5 btn-full ${(count < 1 ? 'btn-disabled' : '')}`} onClick={() => onAdd(count)}> Agregar </button>
        </Container>
    )
}
export default ItemCount