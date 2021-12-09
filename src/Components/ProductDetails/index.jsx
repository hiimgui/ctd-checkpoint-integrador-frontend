import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from "../../Contexts/CartContexts.js";
import { useContext } from 'react';
import './styles.scss';

const ProductDetails = (product) => {
    const { id, title, price, category, description, image } = product;
    const { cart, addToCart } = useContext(CartContext);
    return (
        <Container fluid="md" className="my-1">
            <h1 className="mt-4">{title}</h1>
            <Row className="product-row">
                <Col xs={12} md={8} className="product-row-image-container">
                    <Image className="product-row-image" src={image} alt={title} fluid />
                </Col>
                <Col xs={12} md={4} className="d-flex flex-column">
                    <div>
                        <Badge pill bg="secondary">{category}</Badge>
                    </div>
                    <Row className="my-3">
                        <Col>
                            <h3>{new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            }).format(price)}
                            </h3>
                        </Col>
                        <Col >
                            <Button onClick={() =>addToCart(product)} variant="primary" className="text-uppercase">
                                <FaShoppingCart className="me-2" /> Comprar
                            </Button>
                        </Col>
                    </Row>
                    <p>{description}</p>

                    <Row className="mt-auto">

                        <Form>
                            <Form.Label>Consultar frete e prazo de entrega</Form.Label>
                            <InputGroup className="mb-2">
                                <Form.Control
                                    placeholder="Inserir CEP"
                                    type="text"
                                />
                                <Button variant="outline-secondary" type="submit" >OK</Button>
                            </InputGroup>
                            <a id="linkEsqueciCep" target="_blank" rel="noreferrer" href="https://buscacepinter.correios.com.br/app/endereco/index.php?t" className="linkEsqueciCep">Não lembro meu CEP</a>
                        </Form>


                    </Row>

                </Col>
            </Row>


        </Container>
    )
}

export default ProductDetails