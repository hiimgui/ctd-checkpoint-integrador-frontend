import { useContext } from "react"
import { CartContext } from "../Contexts/CartContexts.js"
import { Card, Container } from "react-bootstrap"

const Cart = () => {
    const { cart } = useContext(CartContext)
    const { cartItems } = cart;
    const prices = [];
    const counts = [];
    
    return (
        <>
        <Container fluid="lg">
            <h2>Cart</h2>
            <Card>
                {
                    cartItems.map((item) => {
                        const { id, title, price, count } = item;
                        prices.push(price)
                        counts.push(count)
                        return (
                            <>
                            <Card.Body key={id}>
                                <Card.Title>{title }  </Card.Title>
                                <Card.Text>{price}  </Card.Text>
                                <Card.Text>{count}</Card.Text>

                            </Card.Body>
                            </>
                        )
                    })
                }
                </Card>
                </Container>
                    <h4>
                    {
                        prices.reduce((a,b) => a+b)
                    }
                    </h4>
                    {

                    counts.reduce((a,b) => a+b)
                    }
                </>
    )
}

export default Cart;