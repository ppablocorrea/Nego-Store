import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';

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
            <Route path='*' element={<h2>404 NOT FOUND</h2>} />   
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
