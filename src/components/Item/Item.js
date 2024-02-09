import './Item.css';
import ItemCount from '../ItemCount/ItemCount';


const Item = ({id, name, img, price}) => {
    return (
        <article className='item'>
            <picture>
                <a href="#"><img className='item-imagen' src={img} alt={name}/></a>
            </picture>
            
            <header>
                <a className='titulo-item' href="#"><h2 className='nombre-item'>{name}</h2></a>
            </header>
            
            <section>
                <p className='precio-item'>UYU ${price}</p>
            </section>
        </article>
    )
}

export default Item