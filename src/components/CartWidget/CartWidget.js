import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartWidget.css';
import { Link } from 'react-router-dom';
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