import './ItemCount.css';
import { useState } from 'react';


const ItemCount = ({stock,initial,onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div>
            <h4 className={(stock === 0) ? 'textoSinStock' : 'ocultarTexto'}>No hay stock disponible</h4>   
            <div className='Controles'>
                <button className={(stock === 0) ? 'Boton-controlador-desactivado' : 'Boton-controlador'} onClick={decrement}>-</button>
                <h6 className={(stock === 0) ? 'cantidad-item-desactivado' : 'cantidad-item'}>{quantity}</h6>
                <button className={(stock === 0) ? 'Boton-controlador-desactivado' : 'Boton-controlador'} onClick={increment}>+</button>
            </div>
            <div>
                <button className={(stock === 0) ? 'botonDesactivado' : 'botonCarrito'} onClick={() => onAdd(quantity)} disabled={stock===0}>
                    Agregar al carrito
                </button>
            </div>    
        </div>
    )
}

export default ItemCount