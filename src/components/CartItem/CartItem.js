import Card from 'react-bootstrap/Card';
import './CartItem.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartItem = ({id, name, img, price, quantity}) => {

    let totalItem = price * quantity

    const { removeItem } = useContext(CartContext)

    const handleOnDelete = () => {
        const item = {
            id,price,quantity
        }
        removeItem(item)
    }

    return (
        <Card className='Cards' style={{ width: '20rem' } }>
            <Card.Img className='Imagen-Item-Carrito' variant="top" src={img} alt={name}/>  
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p className='texto-Cantidad'>Cantidad: {quantity} unidades</p>
                    🇺​​​​​🇾​​​​​🇺​​​​​ {totalItem}                
                </Card.Text>
            </Card.Body>
            <div>
                <button className='boton-Item' onClick={handleOnDelete}>
                    Eliminar de mi compra
                </button>
            </div>
        </Card>
    )
}

export default CartItem