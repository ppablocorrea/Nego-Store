import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import './Cart.css';

const Cart = () => {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1 className="textoSinProductos">Aún no hay productos en tu carrito</h1>
                <Link to='/'>Agregar productos</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Mi Compra</h1>
            { cart.map(p => <CartItem key={p.id} {...p} />) }
            <h4>Total: ${total}</h4>
            <button onClick={() => clearCart()} className="btnLimpiarCarrito">Limpiar carrito</button>
            <Link className="btnCheckout" to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart