import { useContext } from "react"
import { CartContext } from "../Contexts/CartContexts.js"
import { Card, Container, Row, Col, Button } from "react-bootstrap"
import CartItens from "../Components/Cart"

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext)
    const { cartItems } = cart;

    return (
        <>
            <h2 className="text-center my-4">Cart</h2>
            <Container fluid="lg" >
                <Row>
                    <Col md={12} lg={9}>
                        <ul>
                            {
                                cartItems.map((item) => {
                                    return (
                                        <CartItens product={item} key={item.id} />
                                    )
                                })
                            }
                        </ul>
                    </Col>
                    <Col md={12} lg={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Total:</Card.Title>
                                <Card.Text className="fw-bolder fs-2">
                                    {new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(cartItems.reduce((acc, curr) => acc + curr.price * curr.count, 0))}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <Button variant="dark">Pagamento</Button>
                                <Button variant="outline-danger" onClick={clearCart} >Limpar</Button>
                            </Card.Footer>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart;