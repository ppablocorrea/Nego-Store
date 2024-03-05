import './ItemDetailContainer.css';
import { useState, useEffect } from 'react'; 
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db,'productos',itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {id : response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div>
            <div className={(loading) ? 'estilosCarga' : 'ocultar'}>
                <h4 className='estiloObtenerProductos'>Obteniendo el producto</h4>
                <Spinner className='estiloSpinner' animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            <div className={(loading) ? 'ocultar' : 'ItemContainer'}>
                <ItemDetail {...product}/>
            </div>
        </div>
        
    )
}

export default ItemDetailContainer