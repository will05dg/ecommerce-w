import { useContext, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const { id } = useParams();
    const { addToCart, getTotalQuantity } = useContext(CartContext)

    let totalInCart = getTotalQuantity(id);

    const [item, setItem] = useState({});

    useEffect(() => {
        const productosCollection = collection(db, "productosArte");

        const docRef = doc(productosCollection, id);

        getDoc(docRef).then((res) => {
            setItem({ ...res.data(), id: res.id });
        });
    }, [id]);

    const onAdd = (cantidad) => {
        let objeto = { ...item, quantity: cantidad };
        addToCart(objeto)
        toast.success("Producto agregado al carrito");
    };

    return <ItemDetail item={item} onAdd={onAdd} totalInCart={totalInCart} />;
};
export default ItemDetailContainer;