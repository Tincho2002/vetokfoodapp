import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import './CartWidget/CartWidget.css';

const NavBar = () => {
  return (
    <Navbar bg="warning" variant="warning">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          e-commerce food for cats and dogs
        </Navbar.Brand>     
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>
              Home
          </Nav.Link>
          <Nav.Link as={Link} to='/category/dry'>Dry Food</Nav.Link>
          <Nav.Link as={Link} to='/category/wet'>Wet Food</Nav.Link>
          <Nav.Link as={Link} to='/category/accessories'>Accessories</Nav.Link>
          <Nav.Link as={Link} to='/category/sanitary'>Sanitary Stones</Nav.Link>
          <Nav.Link as={Link} to='/category/contact'>Contact</Nav.Link>
          <Nav.Link as={Link} to='/category/about'>About Us</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;