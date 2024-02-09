import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar-principal'>
            <Link className='navbar-titulo' to={'/'}>
                <h4>Nego Store</h4>    
            </Link>
            <div>
                <NavLink to={'/Category/Remeras'} className={'navbar-opciones'}> Remeras </NavLink>
                <NavLink to={'/Category/Buzos'} className={'navbar-opciones'}> Buzos </NavLink>
                <NavLink to={'/Category/Gorras'} className={'navbar-opciones'}> Gorras </NavLink>
                <NavLink to={'/Category/Jeans'} className={'navbar-opciones'}> Jeans </NavLink>
                <NavLink to={'/Category/Coleccion'} className={'navbar-opciones'}> Colección </NavLink> 
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar