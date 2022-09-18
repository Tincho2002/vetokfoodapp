import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container>
      <h1>Catalogue</h1>
      <p>Next, we present the products marketed by VET-OK! FOOD to entertain your pet...in addition, you can purchase accessories to make your life more comfortable and pleasant!
Your pet will love you!!</p>
      <h3 className="greeting">{greeting}</h3>
    </Container>
  );
}
 
export default ItemListContainer;