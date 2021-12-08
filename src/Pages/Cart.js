import { useContext } from "react"
import CartContext from "../../context/CartContext"

export const Cart = () => {
    const { cart } = useContext(CartContext)
    return(
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}