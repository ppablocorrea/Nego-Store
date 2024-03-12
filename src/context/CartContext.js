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

    const removeItem = (item) => {
        const cartUpdated = cart.filter(prod => prod.id !== item.id)
        setCart(cartUpdated)
        setTotalQuantity(totalQuantity-1)
        setTotal(total - item.price*item.quantity)
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
        <CartContext.Provider value={{cart, totalQuantity, total, addItem, removeItem, clearCart, isInCart}}>
            { children }
        </CartContext.Provider>
    )
}