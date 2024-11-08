import { Link } from "react-router-dom"
import "./carrito.css"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

export const Carrito = () => {
    const { cart } = useContext(CartContext)

    return (
        < div className="contenedorCarrito">
            {cart.map((product) => {
                return <div key={product.id} className="cartCarrito">
                    <img src={product.imagenSrc} alt="" className="ImagenCarrito" />
                    <div className="textoCarrito">
                        <h2>{product.titulo}</h2>
                        <h3>cantidad:{product.quantity}</h3>

                    </div>
                </div>;
            })}
            <div className="botonCarrito">
                <button>limpiar carrito</button>
                <Link to={"/checkout"}>
                    <button>Comprar</button>
                </Link>
            </div>
        </div>
    )
}

export default CartContext