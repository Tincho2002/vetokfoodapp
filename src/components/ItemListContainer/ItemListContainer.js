import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList.js';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../utils/products';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    } else {
      getAllProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    }
  }, [categoryId])
  
return (
  <Container>
    <h1 className="greeting">{greeting}</h1>
    <h2>Catalogue</h2>
    <p>Next, we present the products marketed by VET-OK! FOOD to entertain your pet...in addition, you can purchase accessories to make your life more comfortable and pleasant!
Your pet will love you!!</p>
      
    <section className="item-list-container">
      <h3 className="item-list-container__title">Featured Products</h3>
      <ItemList products={products} />
    </section>
  </Container>
  );
}
 
export default ItemListContainer;