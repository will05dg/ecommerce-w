import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ imagenSrc, titulo, categoria, precio, stock, id }) => {

    if (stock < 1) {
        return
    }

    return (
        <div className="cartas">
            <img src={imagenSrc} alt="" />
            <h2 className="espacioTipografia">{titulo}</h2>
            <h3 className="espacioTipografia">Precio: US ${precio}</h3>
            <div className="texto">
                <h3>stock: {stock}</h3>
                <h4>categoria: {categoria}</h4>
                <Link to={`/detail/${id}`}>
                    <button>ver más</button>
                </Link>
            </div>
        </div>
    );
};