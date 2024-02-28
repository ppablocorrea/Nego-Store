import { useState } from 'react';
import './CheckoutForm.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailRepeat, setEmailRepeat] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }
        
        onConfirm(userData)
    }

    const isFormValid = name && phone && email;

    const emailValidate = email === emailRepeat;

    const FormValidate = isFormValid && emailValidate;

    return (
        <Form onSubmit={handleConfirm} className='estiloFormulario'>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFullname">
                    <Form.Label className='textoizquierda'>Nombre completo *</Form.Label>
                    <Form.Control type="text" placeholder="Jane Smith" value={name} onChange={({ target }) => setName(target.value)} required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label className='textoizquierda'>Teléfono *</Form.Label>
                    <Form.Control type="phone" placeholder="---/---/---" value={phone} onChange={({ target }) => setPhone(target.value)} required />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className='textoizquierda'>Email *</Form.Label>
                    <Form.Control type="email" placeholder="email@example.com" value={email} onChange={({ target }) => setEmail(target.value)} required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridRepeatEmail">
                    <Form.Label className='textoizquierda'>Repite Email *</Form.Label>
                    <Form.Control type="email" placeholder="email@example.com" value={emailRepeat} onChange={({ target }) => setEmailRepeat(target.value)} required />
                </Form.Group>
            </Row>

            <button type='submit' className={(isFormValid && emailValidate) ? 'boton-Item' : 'boton-desactivado'} disabled={!(isFormValid && emailValidate)}>
                Completar Orden
            </button>
        </Form>
    )
}

export default CheckoutForm