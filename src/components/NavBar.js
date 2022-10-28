import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import './CartWidget/CartWidget.css';
import logo from '../assets/logov.png';
import useCartContext from '../cartcontext/CartContext';
import { useState } from 'react';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const { contextFunction  } = useCartContext();
  contextFunction();
  return (
    <Navbar expanded={expanded} bg="warning" variant="warning">
      <Container>
        <Navbar.Brand as={Link} to='/'><img className="navbar-brand" src={logo} width="75px" alt="logo" />
          <strong>FOOD</strong>
        </Navbar.Brand> 
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>
              Home
          </Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)} as={Link} to='/category/dry'>Dry Food</Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)} as={Link} to='/category/wet'>Wet Food</Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)} as={Link} to='/category/accessories'>Accessories</Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)} as={Link} to='/category/sanitary'>Sanitary Stones</Nav.Link> 
          <Nav.Link onClick={() => setExpanded(false)} as={Link} to='/contact' href="/contact">Contact</Nav.Link>     
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;