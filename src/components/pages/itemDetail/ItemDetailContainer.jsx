import { useState } from "react"
import { productosArte } from "../../../productos"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    let id = "2";
    const [item, setItem] = useState({});

    useState(() => {
        let productoSelected = productosArte.find(productosArte => productosArte.id === id)
        setItem(productoSelected)
    }, [id])

    return <ItemDetail item={item} />
}

export default ItemDetailContainer