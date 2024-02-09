import './ItemList.css';
import Item from '../Item/Item';


const ItemList = ({products}) => {
    return (
        <div className='lista-items'>
            {products.map(prod => <Item key={prod.id} name={prod.name} img={prod.img} price={prod.price} stock={prod.stock} />)}
        </div>
    )
}

export default ItemList