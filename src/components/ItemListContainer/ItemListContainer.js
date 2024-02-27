import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)
        
        const collectionRef = categoryId
            ? query(collection(db,'productos'), where('category', '==', categoryId))
            : collection(db, 'productos')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            <div className={(loading) ? '' : 'ocultar'}>
                <h4 className='estiloObtenerProductos'>Obteniendo productos</h4>
                <Spinner className='estiloSpinner' animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            <div className={(loading) ? 'ocultar' : ''}>
                <h1 className='titulo'>{greeting}</h1>
                <ItemList products = {products}/>
            </div>
        </div>
    )
}

export default ItemListContainer