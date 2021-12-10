import { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { CartContext } from '../../Contexts/CartContexts';

const CartItens = ({product}) => {
    const { addToCart, removeFromCart } = useContext(CartContext);
    const {id, title, price, count } = product;
    return (
        <Row className='my-2' key={id}>
            <Col xs={7} >
                <h4 className='fw-bold'>{title}</h4>
                <p>{new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(price)}</p>
            </Col>
            <Col className='d-flex align-items-center '>Quant: {count}</Col>
            <Col xs={2} className='d-flex justify-content-evenly align-items-center flex-wrap'>
                <Button className='d-inline-flex  justify-content-center flex-fill' variant="danger" onClick={() => removeFromCart(product)} >-</Button>
                <Button className='d-inline-flex  justify-content-center flex-fill' variant="success" onClick={() => addToCart(product)}>+</Button>
            </Col>
        </Row>
    );
}

export default CartItens;