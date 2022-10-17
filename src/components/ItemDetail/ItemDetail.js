import { useState } from 'react';
import { Button, Badge, Breadcrumb, Container } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount.js';
import useCartContext from '../../cartcontext/CartContext';
import Swal from "sweetalert2";
import '../Item/Item.css';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Spinner from '../LoadingSpinner/';

const ItemDetail = ({ product }) =>
{
  const [isInCart, setIsInCart] = useState(false);
  const [showItemCount, setShowItemCount] = useState(true);
  const { addToCart, estaEnCarrito, getItemQuantity } = useCartContext();
  
  const onAdd = (quantity) =>  {
    setIsInCart(true);
    addToCart(product, quantity);
    setShowItemCount(false);

    Swal.fire({
      icon: 'success',
      title: 'New product added to cart',
      text: `Added ${quantity} units of ${product.title} `,
      confirmButtonColor: "#444444"
    });
  };
  const catPath = `/category/${product.category}`;

  if (product.pictureUrl === undefined)  {
    return }
    
    document.title = `VET-OK! FOOD ${product.category}/${product.title}`;
    
    return (
    <><div>
      <h3><Spinner/></h3>
      <Container className="d-flex text-center justify-content-center p-5 slide-in-fwd-center">      
      <Breadcrumb listProps={{ className: "justify-content-center" }} className="justify-content-center">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>CATALOGUE</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${catPath}` }}>
          {product.category}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
    </div>
      <article className="product-card">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 push-bit align-middle">
            <span className="position-absolute top-4 end-4 translate-middle badge rounded-pill bg-warning">{isInCart && estaEnCarrito(product.id) ?
              <><div className="cart-icon2"><AiOutlineShoppingCart /><span className="mostrar-cantidadItem"> {getItemQuantity(product.id)}</span></div></>
              :
              <><div className="cart-icon2"><AiOutlineShoppingCart /><span className="mostrar-cantidadItem"> 0</span></div></>
            }</span>
            <img className="product-card__image" src={product.pictureUrl} alt="" />
</div>
          <div className="col-sm-6 col-md-6 col-lg-6 push-bit text-center">
            <div className="clearfix py-3">
              <div className="pull-right">
                <h3 className="product-card__name">{product.title}</h3>
                <h4 className="product-card__name">{product.description}</h4>
                <Container className="d-flex justify-content-center text-center align-middle w-100 mw-50">
                  <Badge className="badge bg-primary"> $ {product.price}</Badge>
                  {estaEnCarrito(product.id) ?
                    <Badge className="bg-secondary ms-2"> x {getItemQuantity(product.id)} = $ {product.price * getItemQuantity(product.id)}</Badge>
                    :
                    null}
                  <Badge className="badge bg-warning">Stock {product.stock}</Badge>
                </Container><br></br>
                {showItemCount && (
                <ItemCount stock={product.stock} onAdd={onAdd} initial={1} itemName={product.title} />)}
                {!showItemCount && (
                  <Link to="/cart">
                    <Button variant="btn btn-lg btn-outline-warning w-50" >
                      GO TO CART
                    </Button>
                  </Link>)}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default ItemDetail;