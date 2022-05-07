import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const addItem = (product, quantity) => {

        if (!isInCart(product.id)) {
            const objItemCart = {
                ...product,
                quantity
            }
            setCart([...cart, objItemCart])
        }else{
            cart.forEach(prod => {
                if(prod.id == product.id){
                    prod.quantity += quantity
                }
            })
        }

    }
    const removeItem = (id) => {
        setCart(cart.filter(item => (item.id != id)))
    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })

        return count
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += (prod.quantity * prod.price)
        })

        return total
    }



    return (
        <Context.Provider value={{
            cart,
            addItem,
            clearCart,
            removeItem,
            getQuantity,
            getTotal
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context