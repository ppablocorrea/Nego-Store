import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbarBg">
          <Container>
            <Navbar.Brand className='navbar-titulo' href="/">Nego Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href='/Categoria/Remeras' className='navbar-opciones'>Remeras</Nav.Link>
                <Nav.Link href='/Categoria/Buzos' className='navbar-opciones'>Buzos</Nav.Link>
                <Nav.Link href='/Categoria/Gorras' className='navbar-opciones'>Gorras</Nav.Link>
                <Nav.Link href='/Categoria/Jeans' className='navbar-opciones'>Jeans</Nav.Link>
                <Nav.Link href='/Categoria/Coleccion' className='navbar-opciones'>Colección</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <CartWidget/>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default NavBar