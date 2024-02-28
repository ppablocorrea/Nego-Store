import { useState } from 'react';
import './CheckoutForm.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }
        
        onConfirm(userData)
    }

    return (
        <Form onSubmit={handleConfirm} className='estiloFormulario'>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFullname">
                <Form.Label className='textoizquierda'>Nombre completo *</Form.Label>
                <Form.Control type="text" placeholder="Jane Smith" value={name} onChange={({ target }) => setName(target.value)}/>
                </Form.Group>
        
                <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label className='textoizquierda'>Teléfono *</Form.Label>
                <Form.Control type="phone" placeholder="---/---/---" value={phone} onChange={({ target }) => setPhone(target.value)} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className='textoizquierda'>Email *</Form.Label>
                <Form.Control type="text" placeholder="email@example.com" value={email} onChange={({ target }) => setEmail(target.value)}/>
                </Form.Group>
        
                <Form.Group as={Col} controlId="formGridRepeatEmail">
                <Form.Label className='textoizquierda'>Repite Email *</Form.Label>
                <Form.Control type="phone" placeholder="email@example.com"/>
                </Form.Group>
            </Row>
    
            <button type='submit' className='boton-Item'>
                Completar Orden
            </button>
        </Form>
    )
}

export default CheckoutForm