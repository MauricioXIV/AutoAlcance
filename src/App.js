import './main.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';

function App() {


  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      
        <Navbar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:categoria' element={<ItemListContainer />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>

      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
