import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


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
}

export default ItemDetail