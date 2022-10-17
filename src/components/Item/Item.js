import { Button, Badge, Container } from 'react-bootstrap';
import '../Item/Item.css';
import useCartContext from '../../cartcontext/CartContext';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Item = ({ product }) => {
  const { getItemQuantity, isInCart } = useCartContext();
  return (
    <article className="product-card">
    <span className="position-absolute top-4 end-4 translate-middle badge rounded-pill bg-warning">{isInCart(product.id) ?
        <><div className="cart-icon2"><AiOutlineShoppingCart /><span className="mostrar-cantidadItem"> {getItemQuantity(product.id)}</span></div></>
        :
        <><div className="cart-icon2"><AiOutlineShoppingCart /><span className="mostrar-cantidadItem"> 0</span></div></>
    }</span>
      <img className="product-card__image" src={product.pictureUrl} alt="" />
      <h3 className="product-card__name">{product.title}</h3>
      <Container className="d-flex justify-content-center text-center align-middle w-100 mw-50">
        <Badge className="badge bg-primary"> $ {product.price}</Badge> 
        <Badge className="badge bg-warning">Stock {product.stock}</Badge>
      </Container><br></br>

      <Link to={`/item/${product.id}`}>
        <Button variant="btn btn-lg btn-outline-warning w-100" size="sm">
          See Detail
        </Button>
      </Link>
    </article>
  );
}

export default Item;