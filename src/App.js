import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Descubri la nueva tendencia Nego!"}/>} />
            <Route path='/Categoria/:categoryId' element={<ItemListContainer greeting={"Descubri la nueva tendencia Nego!"}/>} /> 
            <Route path='/Item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Checkout' element={<Checkout/>} />
            <Route path='*' element={<h2>404 NOT FOUND</h2>} />   
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
