import './Item.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Item = ({id, name, img, price, previousprice}) => {
    return (
        <Card className='Cards' style={{ width: '24rem' } }>
            <Link to={`/Item/${id}`}>
                <Card.Img className='imagen-Card' variant="top" src={img} alt={name}/>  
            </Link>  
            <Card.Body>
                <Link className='titulo-Card' to={`/Item/${id}`}>
                    <Card.Title>{name}</Card.Title>
                </Link>
                <Card.Text>
                    <p className='texto-PrecioPrevio'>🇺​​​​​🇾​​​​​🇺​​​​​ {previousprice}</p> <p className='texto-Precio'>🇺​​​​​🇾​​​​​🇺​​​​​ {price}</p>                
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Item