import { useEffect, useState } from "react"
import { productosArte } from "../../../productos"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    let id = 1;
    const [item, setItem] = useState({});
    useEffect(() => {
        let productoSelected = productosArte.find((producto) => producto.id === id);
        setItem(productoSelected);
    }, [id]);

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;