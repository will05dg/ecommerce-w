import { useContext, useEffect, useState } from "react"
import { productosArte } from "../../../productos"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { addToCart, getTotalQuantity } = useContext(CartContext)

    let totalInCart = getTotalQuantity(id);

    const [item, setItem] = useState({});

    useEffect(() => {
        let productoSelected = productosArte.find((producto) => producto.id == id);
        setItem(productoSelected);
    }, [id]);

    const onAdd = (cantidad) => {
        let objeto = { ...item, quantity: cantidad };
        addToCart(objeto)
    };

    return <ItemDetail item={item} onAdd={onAdd} totalInCart={totalInCart} />;
};

export default ItemDetailContainer;