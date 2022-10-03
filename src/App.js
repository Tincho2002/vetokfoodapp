//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import ItemCount from './components/ItemCount';

function App() {
  //const onAdd = (qty) => {
    //alert(`Agregaste ${qty} productos`);
  //};
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Welcome to VET-OK! FOOD'} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Welcome to VET-OK! FOOD'} />} />
        <Route path='/item/:id' element={<ItemDetailContainer  />} />
        <Route path='/cart' element={<Cart  />} />
        <Route path='/checkout' element={<Checkout  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;