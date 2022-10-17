//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './cartcontext/CartContext';
import { doc, getFirestore, getDoc, } from 'firebase/firestore';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    // obtenemos la base de datos
    const database = getFirestore();

    // obtener referencia al documento
    const itemReference = doc(database, "items", "7Jjzp9mGZ61C78MrwZ3R");
    // obtenemos los datos a partir de la referencia
    getDoc(itemReference)
      .then((snapshot) => {
        // preguntamos si existe este documento
        if (snapshot.exists()) {
          // armamos un objeto literal con el id y los demas campos del documento         
          const item = {
            id: snapshot.id,
            ...snapshot.data()
          };
          console.log(item);
        }
      })
      .catch(error => console.warn(error))
  }, []);


  //useEffect(() => {
    // obtenemos la base de datos
    //const database = getFirestore();

    // obtener referencia a colletion
    //const collectionReference = collection(database, "items");
    // obtenemos los datos a partir de la referencia
    //getDoc(collectionReference)
      //.then((snapshot) => {
        //armamos una lista de objetos literales con los id y los demas campos del collection 
        //const list = snapshot
        //.doc
        //.map((doc) => ({
          //id: doc.id,
          //...doc.data()
        //}));
        //console.log(list);        
      //})
      //.catch(error => console.warn(error))
  //}, []);

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Welcome to VET-OK! FOOD'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Welcome to VET-OK! FOOD'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart greeting={"Este es su carrito"} />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;