import { Link } from "react-router-dom"
import "./carrito.css"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

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
                        <h2>total: US ${product.quantity * product.precio}</h2>
                        <div>
                            <h3>cantidad: {product.quantity}</h3 >
                            <h4>precio por unidad US ${product.precio}</h4>
                        </div>
                    </div>
                    <div className="textoCarrito1">
                        <button className="buttonMenor" onClick={() => removeById(product.id)}> <DeleteForeverOutlinedIcon /> </button>
                    </div>
                </div>;
            })}



            {cart.length > 0 ? (
                <div className="botonCarrito">
                    <h2 className="espacioTipografia">El total a pager es US ${total}</h2>
                    <Link to={"/checkout"}>
                        <button>Comprar</button>
                    </Link>
                    <button className="buttonMenor" onClick={resetCart}>limpiar</button>
                </div>) :
                (
                    <div className="centro">
                        <img src="https://res.cloudinary.com/dsphjfhea/image/upload/v1728271324/Mesa_de_trabajo_1_ekn2hk.svg" alt="logo de lapiz" />
                        <h2>Agregar productos al carrito</h2>
                    </div>
                )}
        </div>
    )
}

export default CartContext