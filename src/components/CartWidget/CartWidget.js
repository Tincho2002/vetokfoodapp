import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartWidget.css';
//import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useCartContext from '../../cartcontext/CartContext';

const CartWidget = () => {
  const { itemsTotal } = useCartContext();
  return (
      <Link to="/cart" className="text-dark">

        <div className="cart-icon">
          <AiOutlineShoppingCart />
          { itemsTotal()? <div className="mostrar-cantidad">{itemsTotal()}</div>
          : <div className="mostrar-cantidad2">{itemsTotal()}</div> }

        </div>
      </Link>    
  );
}
 
export default CartWidget;