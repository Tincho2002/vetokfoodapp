import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Badge, Container } from 'react-bootstrap';
import useCartContext from '../../cartcontext/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';
import './Cart.css';
import { createOrder } from "../../utils/orders";
import OrderModal from "../Checkout/Checkout";

const buyerMock = {
  name: 'coderhouse',
  phone: '1122334455',
  email: 'coderhouse@mail.com'
}

function Cart () {
  const { cart, removeFromCart, clearCart, itemsTotal, precioTotal } = useCartContext();
  const [isActive, setActive] = useState(false);
  //const [user, setUser] = useState(buyerMock);
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState();


  const handleVaciar = () =>  {
    Swal.fire({
      icon: 'success',
      title: 'Emptied Cart'
    })
    clearCart();
  }

  const handleRemove = (itemCart) =>  {
    removeFromCart(itemCart);
    setActive(isActive);
      Swal.fire({
        icon: 'error',
        title: `Product deleted from cart`        
      })
  }

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  //const handleBuy =  () => {
    //const newOrder = {
      //buyer: buyerMock,
      //items: cart,
      //total: precioTotal()
    //};
    //console.log(newOrder);
    //createOrder(newOrder);
  //}

  const handleBuy = async () => {
    const itemsToBuy = cart.map((item) => ( {
      id: item.id,
      cant: item.cant,
      title: item.title,
      pricex1: item.price,
      total: item.price * item.cant,
  }
  ))
    const newOrder = {
      buyer: buyerMock,
      items: itemsToBuy,
      total: precioTotal()
    };
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
}

  useEffect(() => {
    function setTitle(title) {
      document.title = title;
    }
    setTitle("VET-OK!-FOOD -- Cart");
  }, []);

  if (cart.length === 0) {
    return <section id="Carrito" className="py-5 text-center container">    
      <div className="row py-lg-5">
        <div className="col-12">
        <Badge className="m-1" bg="warning"><h6>THERE ARE NO ITEMS IN YOUR CART</h6></Badge>
          <Link to="/">
            <Button variant="btn btn-lg btn-outline-warning w-40" >
              BACK TO MENU
            </Button>
          </Link>
        </div>
      </div>
    </section>
  }
  else {
    return (
      <section id="carrito" className="py-2 text-center container slide-in-fwd-center">
        <div className="row py-lg-2">
          <div>
            <h2>YOUR CART FOOD</h2>
            <Badge bg="primary" className="m-1">
              <h6>TOTAL ITEMS: {itemsTotal()}</h6>
            </Badge>
            <Badge className="m-3" bg="primary">
            <h6> TOTAL COST: $ {precioTotal()}</h6>
            </Badge>            
            <div>
              <Link to="/">
              <Button variant="btn btn-lg btn-outline-warning w-40" >
              GO TO CATALOGUE
              </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
              {cart.map(itemCart => {
                return (
                  <Container id={itemCart.id} className={isActive ? 'bounce-out-top' : null} key={itemCart.id}>
                    <Card className="bg-warning shadow-lg p-3 mb-3 mr-2 ml-2 rounded text-center">
                      <Card.Title>{itemCart.title} x {itemCart.cant}</Card.Title>
                      <Card.Img variant="top" src={itemCart.pictureUrl} alt={itemCart.title} />
                      <Card.Body>                        
                        <Badge className="m-1" bg="primary"><h6>$ {itemCart.price} x 1 </h6></Badge>
                        <Badge className="m-1" bg="secondary"><h6>$ {itemCart.price * itemCart.cant} x {itemCart.cant}</h6></Badge>
                        <Button onClick={() => handleRemove(itemCart.id)} className="btn btn-danger w-50 mt-3">REMOVE</Button>
                      </Card.Body>
                    </Card>
                  </Container>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <span><Button variant="danger" onClick={handleVaciar}>EMPTY CART</Button> </span>    
          <span><Button variant="success" onClick={handleOpen}>CHECKOUT</Button></span> 
        </div>
        <OrderModal
          showModal={showModal}          
          onClose={handleClose}
          onBuy={handleBuy}
          orderId={orderId}
        />
      </section>
    );
  }
}

export default Cart;