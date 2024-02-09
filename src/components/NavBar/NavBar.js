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
                <NavLink to={'/Categoria/Remeras'} className={'navbar-opciones'}> Remeras </NavLink>
                <NavLink to={'/Categoria/Buzos'} className={'navbar-opciones'}> Buzos </NavLink>
                <NavLink to={'/Categoria/Gorras'} className={'navbar-opciones'}> Gorras </NavLink>
                <NavLink to={'/Categoria/Jeans'} className={'navbar-opciones'}> Jeans </NavLink>
                <NavLink to={'/Categoria/Coleccion'} className={'navbar-opciones'}> Colección </NavLink> 
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar