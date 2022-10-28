import { useState } from 'react'
import { Alert, Badge, Button, Container, Form, Modal } from "react-bootstrap";
import useCartContext from '../../cartcontext/CartContext';
import { Link } from "react-router-dom";
import './Checkout.css';

const OrderModal = ({ showModal, onClose, onBuy, orderId}) => {
  const { cart, clearCart, itemsTotal, precioTotal } = useCartContext();
  // Estados para los campos del formulario de cliente
    
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [VeryfyEmail, setVeryfyEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Estados para manejar los errores
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrormsg] = useState(false);
  
  // Handle para el campo de nombre
  const handleNombre = (e) => {
    setNombre(e.target.value);
    setSubmitted(false);
  };
   
  // Handle para el campo de email
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handle para el campo de revalidar email
  const handleVeryfyEmail = (e) => {
    setVeryfyEmail(e.target.value);
    setSubmitted(false);
  };
   
  // Handle para el cambio en el campo de telefono
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

  // Funciones para verificar los inputs del formulario de cliente y mostrar los errores (si los hay) 

  function onlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]*$/.test(str);
  }
  function containsArroba(str) {
    const tieneArroba = /@/;
    return tieneArroba.test(str);
  }

  function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }

  // Handle para el formulario de datos del cliente
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onlyLettersAndSpaces(nombre) || nombre === '' || !containsArroba(email) || email === '' || VeryfyEmail !== email  || !onlyNumbers(phone) || phone === '') {
    setErrormsg(true);
         
    } else {
      setSubmitted(true);
      setErrormsg(false);
      onBuy();
    }
  };
  
   // Mostrar mensaje de éxito
   const successMessage = () => {
      return (
        <div
          className="success"
          style={{
            display: submitted ? '' : 'none',
          }}>
          <h4 className="bg-success text-white scale-in-ver-center">Successful Payment</h4>
        </div>
      );
    };
   
    // Mostrar mensaje de error si algo male sal
    const errorMessage = () => {
      return (
        <div
          className="error"
          style={{
            display: errorMsg ? '' : 'none',
          }}>
          <h4 className="bg-danger text-white scale-in-ver-center">Please complete all fields correctly</h4>
          
        </div>
      );
    };  
  return (
    <><Modal show={showModal} onHide={onClose}>
      <Modal.Header className="modalheader" closeButton>        
        <Modal.Title>Checkout</Modal.Title>        
      </Modal.Header>
      <Modal.Body className="modalbody">
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Names and Surnames <span className="text-muted"></span></Form.Label>
          <Form.Control onChange={handleNombre} value={nombre} type="text" className="form-control input"  placeholder="Names and Surnames" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >Email</Form.Label>
          <Form.Control onChange={handleEmail} value={email} type="email" className="form-control input"  placeholder="Your@email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >Check Email</Form.Label>
          <Form.Control onChange={handleVeryfyEmail} value={VeryfyEmail} type="email" className="form-control input"  placeholder="Check Your@email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label >Phone</Form.Label>
          <Form.Control onChange={handlePhone} value={phone} type="phone" className="form-control input"  placeholder="222446633" required />
        </Form.Group>
        <Form.Group className="row g-5">
        <Form.Label className="col-md-5 col-lg-12 order-md-last">          
            <span className="text-dark"><strong>Your Cart</strong></span>
            <span className="badge bg-primary rounded-pill-end">{itemsTotal()}</span>
          <ul className="list-group mb-3">
          {cart.map(item => (
            <Container key={item.id} className="list-group-item justify-content-between lh-lg">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="mb-3">{item.title} {item.description} x{item.cant}</h6>                
                </div>
                <span className="text-muted">$ {item.price}</span>
              </li>
            </Container>
          ))}
          <li className="list-group-item d-flex justify-content-between lh-lg">
              <div>
                <h6 className="mb-3">Total: $ {precioTotal()}</h6>
              </div>
            </li>
          </ul>
        </Form.Label>
        </Form.Group>
    </Modal.Body>
    <Modal.Footer className="modalfooter">
        {!orderId && (
          <>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Go to Buy
            </Button>
          </>
        )}
        {orderId && (
          <div className='footerOrderSuccess'>
            <Alert key='success' variant='success'>            
              <Badge className="m-3" bg="primary">
                <h6> Total Items: {itemsTotal()}</h6>
              </Badge>              
              <Badge className="m-3" bg="primary">
                <h6> Total to Pay: $ {precioTotal()}</h6>
              </Badge> 
              <Badge className="m-3" bg="success">
                <h6> Order Number: {orderId}</h6>
              </Badge>              
            </Alert>
            <Link to='/'>
              <Button variant="success" onClick={clearCart}>
                Buy again
              </Button>
            </Link>
          </div>
        )}
      </Modal.Footer>
    </Modal></>    
  );
}
 
export default OrderModal;