import { useState } from 'react'

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
        <div className='ItemCount'>
            <div className='ItemCountCounter my-3'>
                <button className='btn btn-danger' onClick={decrement}> - </button>
                <span className='fs-5 mx-2'>{count}</span>
                <button className='btn btn-danger' onClick={increment}> + </button>
            </div>
            <button className={`btn btn-success btn-full ${(count < 1 ? 'disabled' : '')}`} onClick={() => onAdd(count)}> Agregar </button>
        </div>
    )
}
export default ItemCount