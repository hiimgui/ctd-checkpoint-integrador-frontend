import { useContext } from "react"
import { CartContext } from "../Contexts/CartContexts.js"


const Cart = () => {
    const { cart } = useContext(CartContext)
    const { cartItems } = cart;
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {
                    cartItems.map((item) => {
                        const { id, title, price, count } = item;

                        return (
                            <li key={id}>
                                <span>{title } | </span>
                                <span>{price} | </span>
                                <span>{count}</span>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Cart;