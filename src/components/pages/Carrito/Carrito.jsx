import { Link } from "react-router-dom"
import "./carrito.css"

export const Carrito = (item) => {
    return (
        <div >
            <div className="cartCarrito">
                <img src={item.imagenSrc} alt="" className="detalleImagen" />
                <div>
                    <h2>{item.titulo}</h2>
                    <p>{item.descripcion}</p>
                </div>
            </div>
            <Link to={"/checkout"}>
                <button>Comprar</button>
            </Link>
        </div>
    )
}
