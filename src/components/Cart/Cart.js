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
                <Link to='/' className='btnAgregarProductos'>Agregar productos</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Mi Compra</h1>
            <div className="CartItemsContainer">
                { cart.map(p => <CartItem key={p.id} {...p} />) }
            </div>
            <h4 className="texto-total">Importe total: ${total}</h4>
            <div className="BotonesContainer">
                <Link onClick={() => clearCart()} className='btnLimpiarCarrito'>Limpiar carrito</Link>
                <Link to='/Checkout' className='btnCheckout'>Completar pedido</Link>
            </div>
        </div>
    )
}

export default Cart