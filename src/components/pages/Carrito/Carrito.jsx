import { Link } from "react-router-dom"
import "./carrito.css"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

export const Carrito = () => {
    const { cart, resetCart, removeById, getTotalAmount } = useContext(CartContext)

    let total = getTotalAmount();

    return (
        < div className="contenedorCarrito">
            {cart.map((product) => {
                return <div key={product.id} className="cartCarrito">
                    <img src={product.imagenSrc} alt="" className="ImagenCarrito" />
                    <div className="textoCarrito">
                        <h2>{product.titulo}</h2>
                        <h3>precio por unidad US ${product.precio}</h3>
                        <h3>cantidad: {product.quantity}</h3 >
                        <h3>total: US ${product.quantity * product.precio}</h3>
                    </div>
                    <div className="textoCarrito1">
                        <button onClick={() => removeById(product.id)}>eliminar</button>
                    </div>
                </div>;
            })}

            {cart.length > 0 && (
                <div className="botonCarrito">
                    <button onClick={resetCart}>limpiar</button>
                    <h2>El total a pager es US ${total}</h2>
                    <Link to={"/checkout"}>
                        <button>Comprar</button>
                    </Link>
                </div>)}
        </div>
    )
}

export default CartContext