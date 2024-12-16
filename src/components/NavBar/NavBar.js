import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbarBg">
      <Container>
        <Navbar.Brand>
          <Link className="navbar-titulo" to="/">
            Ecommerce
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="navbar-opciones" to="/Categoria/Remeras">
              Remeras
            </Link>
            <Link className="navbar-opciones" to="/Categoria/Buzos">
              Buzos
            </Link>
            <Link className="navbar-opciones" to="/Categoria/Gorras">
              Gorras
            </Link>
            <Link className="navbar-opciones" to="/Categoria/Jeans">
              Jeans
            </Link>
            <Link className="navbar-opciones ultima" to="/Categoria/Coleccion">
              Coleccion
            </Link>
          </Nav>
          <Nav className="ms-auto carritocentrado">
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
