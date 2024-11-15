import "./checkout.css";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

const Checkout = () => {
    const { cart, getTotalAmount, resetCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        telefono: "",
    });

    const funcionDelFormulario = (evento) => {
        evento.preventDefault();
        const total = getTotalAmount();
        const orden = {
            buyer: userInfo,
            items: cart,
            total,
        };

        let refColleection = collection(db, "ordens")
        addDoc(refColleection, orden).then((res) => {
            setOrderId(res.id);
            resetCart();
        })

        let refCol = collection(db, "productosArte");
        orden.items.forEach((items) => {
            let refDoc = doc(refCol, items.id);
            updateDoc(refDoc, { stock: items.stock - items.quantity });
        })
    };

    const capturarInfo = (evento) => {
        const { name, value } = evento.target
        setUserInfo({ ...userInfo, [name]: value });
    };

    if (orderId) {
        return <div className="tiket">
            <h2>Gracias por su compra</h2>
            <h3>el numero de su compra es : {orderId} </h3>
        </div>
    }

    return (
        <div className="input">
            <form onSubmit={funcionDelFormulario}>
                <input type="text" placeholder="gustabo" name="name" onChange={capturarInfo} />
                <input type="email" placeholder="gustabo@gmail.com" name="email" onChange={capturarInfo} />
                <input type="tel" placeholder="1144777888" name="telefono" onChange={capturarInfo} />
                <button type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout