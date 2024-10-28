import { useEffect, useState } from "react"
import { productosArte } from "../../../productos"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        let productoSelected = productosArte.find((producto) => producto.id == id);
        setItem(productoSelected);
    }, [id]);

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;