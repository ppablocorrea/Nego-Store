import './CartWidget.css';
import Cart from './assets/icons8-shopping-bag-50.png';


const CartWidget = () => {
    return (
        <div>
            <img className='imagen-carrito' height="22px" width="22px" src={Cart} alt="Carrito de Compras"/>
            <p className='cantidad-carrito'>0</p> 
        </div>
    )
}

export default CartWidget