import { Link } from "react-router-dom";
import "./styles.scss";
import { CgShoppingCart } from "react-icons/cg";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap";
import Container from "react-bootstrap/Container";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CTD E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Produtos">Produtos</Nav.Link>
              <Nav.Link href="#Sobre">Sobre Nós</Nav.Link>
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
