import "./styles.scss";
import { CgShoppingCart } from "react-icons/cg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">CTD E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
<<<<<<< HEAD
              <Nav.Link href="#">HOME</Nav.Link>
              <Nav.Link href="/Products">PRODUTOS</Nav.Link>
              <Nav.Link href="#Sobre">SOBRE</Nav.Link>
=======
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              <Nav.Link as={Link} to="#Produtos">PRODUTOS</Nav.Link>
              <Nav.Link as={Link} to="#Sobre">SOBRE</Nav.Link>
>>>>>>> a498580e66a10a90005913dbe593d186a1fc7e6c
            </Nav>
            <Nav>
              <Nav.Link href="#carrinho">
                <CgShoppingCart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
