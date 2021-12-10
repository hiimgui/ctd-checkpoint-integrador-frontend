import "./styles.scss";
import { CgShoppingCart } from "react-icons/cg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {CartContext} from "../../Contexts/CartContexts";

const Header = () => {

  const {cart}  = useContext(CartContext);
  console.log(cart);
  const totalItens = cart.cartItems?.reduce((acc, item) => acc +item.count, 0);

  return (
    <>
      <Navbar
        className="NavStyle"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand as={Link} className="fs-3 fw-bold" to="/">
            CTD E-Commerce
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/Products">
                PRODUTOS
              </Nav.Link>
              <Nav.Link as={Link} to="/Sobre">
                SOBRE
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/Cart">
              <CgShoppingCart size={"2rem"} /><Badge  bg="success"  text="white">{totalItens}</Badge>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
