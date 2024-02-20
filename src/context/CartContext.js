import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const [totalQuantity, setTotalQuantity] = useState(0)

    const [total, setTotal] = useState(0)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
            setTotalQuantity(totalQuantity+1)
            setTotal(total + item.price*quantity)
        } else {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
        setTotal(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart, totalQuantity, total, addItem, removeItem, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}