import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <article className='item'>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            
            <header>
                <h2>{name}</h2>
            </header>
            
            <section>
                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: ${price}</p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada ",quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail