import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,name,price
        }

        addItem(item, quantity)
    }

    /*
    return (
        <article className='item'>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            
            <header>
                <h2>{name}</h2>
            </header>
            
            <section className='informacionProducto'>
                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: ${price}</p>
            </section>
            <footer className='botonesFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/Cart' className='btnTerminarCompra'>Terminar Compra</Link>
                        ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
    */
    return (
        <Card className='Cards' style={{ width: '24rem' } }>
            <Card.Img className='detail-Image' variant="top" src={img} alt={name}/>  
            <Card.Body>
                <Card.Title className='detail-Titulo'>{name}</Card.Title>
                <Card.Text>
                    <p className='texto-Card'>Categoria: {category}</p>
                    <p className='texto-Card'>Descripción: {description}</p>
                    <p className='texto-Card-Ultimo'>Precio: ${price}</p>
                </Card.Text>
                {
                    quantityAdded > 0 ? (
                        <Link to='/Cart' className='btnTerminarCompra'>Terminar Compra</Link>   
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </Card.Body>
        </Card>
    )
}

export default ItemDetail