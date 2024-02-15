import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const Item = ({id, name, img, price}) => {
    return (
        <article className='item'>
            <picture>
                <Link to={`/Item/${id}`}>
                    <img className='item-imagen' src={img} alt={name}/>
                </Link>
            </picture>
            
            <header>
                <Link to={`/Item/${id}`} className={'titulo-item'}>
                    <h2 className='nombre-item'>{name}</h2>
                </Link>
            </header>
            
            <section>
                <p className='precio-item'>UYU ${price}</p>
            </section>
        </article>
    )
}

export default Item