import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';

const NavBar = () => {
  return (
    <Navbar bg="warning" variant="warning">
      <Container>
        <Navbar.Brand href="#home">
          e-commerce food for cats and dogs
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#dry">Dry Food</Nav.Link>
          <Nav.Link href="#wet">Wet Food</Nav.Link>
          <Nav.Link href="#asccessories">Accessories</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;