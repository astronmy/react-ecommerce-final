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
        <div className='item-count'>
            <div className='item-count__counter'>
                <button className='btn-discount' onClick={decrement}> - </button>
                <span className='item-counter'>{count}</span>
                <button className='btn-increment' onClick={increment}> + </button>
            </div>
            <button className={`btn-add ${(count < 1 ? 'disabled' : '')}`} onClick={() => onAdd(count)}> Agregar </button>
        </div>
    )
}
export default ItemCount