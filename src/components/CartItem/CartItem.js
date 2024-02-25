import Card from 'react-bootstrap/Card';

const CartItem = ({id, name, img, price}) => {

    console.log(img)

    return (
        <Card className='Cards' style={{ width: '20rem' } }>
            <Card.Img className='Imagen-Item-Carrito' variant="top" src={img} alt={name}/>  
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p className='texto-Precio'>🇺​​​​​🇾​​​​​🇺​​​​​ {price}</p>                
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CartItem