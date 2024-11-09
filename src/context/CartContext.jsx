import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        let isInCart = cart.some(el => el.id === product.id)
        if (isInCart) {
            let nuevoArrey = cart.map((elemento) => {
                if (elemento.id === product.id) {
                    return { ...elemento, quantity: elemento.quantity + product.quantity }
                } else {
                    return elemento
                }
            })
            setCart(nuevoArrey)
        } else {
            setCart([...cart, product])
        }
    };

    const removeById = (id) => {
        let arrayEliminado = cart.filter((elemento) => elemento.id !== id);
        setCart(arrayEliminado);
    };

    const resetCart = () => {
        setCart([]);
    };

    const getTotalQuantity = (id) => {
        const product = cart.find((elemento) => elemento.id === id);
        return product ? product.quantity : 0;
    }

    const totalAPagar = () => { };

    let dataValue = { cart, addToCart, removeById, resetCart, getTotalQuantity, totalAPagar };

    return <CartContext.Provider value={dataValue}>
        {children}
    </CartContext.Provider>
};
