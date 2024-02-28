import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({id, name, img, description, price, stock, previousprice}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,name,price,img
        }

        addItem(item, quantity)
    }

    return (
        <Card className='Cards' style={{ width: '26rem' } }>
            <Card.Img className='detail-Image' variant="top" src={img} alt={name}/>  
            <Card.Body>
                <Card.Title className='detail-Titulo'>{name}</Card.Title>
                <Card.Text>
                    <p className='texto-Card'>{description}</p>
                    <p className='texto-Card-UltimoPrevio'>UYU​​​​​​​​ {previousprice}</p> <p className='texto-Card-Ultimo'>UYU​​​​​​​​ {price}</p>
                </Card.Text>
                {
                    quantityAdded > 0 ? (
                        <div className='botonesCompra'>
                            <h6 className='productoAgregado'>✅ Producto añadido a tu compra</h6>
                            <Link to='/Cart' className='btnTerminarCompra'>Finalizar Compra</Link>
                            <Link to='/' className='btnContinuarCompra'>Continuar Compra</Link>    
                        </div>                       
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </Card.Body>
        </Card>
    )
}

export default ItemDetail