import { useContext, useState } from 'react';
import './Checkout.css';
import { CartContext } from '../../context/CartContext';
import { Timestamp, writeBatch, collection, getDocs, query, where, documentId, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom'


const Checkout = () => {
    
    const [loading, setLoading] = useState(false)

    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db,'productos')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
                
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'ordenes')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading){
        return(
            <div>
                <h1 className='textoGenerando'>Se está generando su orden...</h1>
                <Spinner className='estiloSpinner' animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        ) 
    }

    if (orderId) {
        return (
            <div>
                <h1 className='textoCompletado'>¡Pedido completado! Gracias por elegirnos</h1>
                <h5 className='textoidpedido'>Esta es tu orden: <span className='textoNroOrden'>{orderId}</span></h5>
                <h6 className='textoContactoEmail'>Revisa tu email para continuar con la compra 📩</h6>
                <Link to='/' className='btnAgregarProductos'>Volver al catálogo</Link>
            </div>
        ) 
    }

    return (
        <div>
            <h1 className='tituloCheckout'>Checkout</h1>
            <div className='ContainerFormulario'>
                <CheckoutForm onConfirm={createOrder}/>    
            </div>
        </div>
    )

}

export default Checkout