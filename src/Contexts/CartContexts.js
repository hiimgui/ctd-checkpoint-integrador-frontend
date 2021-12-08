import { createContext, useState, useMemo } from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, addCart] = useState([]);
    const value = useMemo(() => ({cart, addCart}), [cart]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;