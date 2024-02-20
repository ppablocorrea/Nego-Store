import { useContext } from 'react';
import './CartWidget.css';
import Cart from './assets/icons8-shopping-bag-50.png';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <div>
            <Link to='/Cart' className='sin-subrayado'>
                <img className='imagen-carrito' height="25px" width="25px" src={Cart} alt="Carrito de Compras"/>
                <h4 className='cantidad-carrito'>
                    {totalQuantity}   
                </h4>        
            </Link>
        </div>
    )
}

export default CartWidget