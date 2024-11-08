import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product])
    };

    const removeById = () => { };

    const totalAPagar = () => { };

    const limpiarCart = () => { };

    let dataValue = { cart, addToCart, removeById, totalAPagar, limpiarCart };

    return <CartContext.Provider value={dataValue}>
        {children}
    </CartContext.Provider>
};
