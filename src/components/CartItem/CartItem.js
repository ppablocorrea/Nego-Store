import Card from 'react-bootstrap/Card';

const CartItem = ({id, name, img, category, description, price, stock}) => {
    return (
        <Card>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        {description}
                        {' '}
                    </p>
                    <footer className="blockquote-footer">
                    {price}
                    </footer>
                </blockquote>
          </Card.Body>
        </Card>
    )
}

export default CartItem