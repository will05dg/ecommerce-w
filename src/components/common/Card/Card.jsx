import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ imagenSrc, titulo, categoria, precio, stock }) => {
    return (
        <div className="cartas">
            <img src={imagenSrc} alt="" />
            <div className="texto">
                <h3>{titulo}</h3>
                <h3>precio: US ${precio}</h3>
                <h4>categoria:{categoria}</h4>
                <h4>stock:{stock}</h4>
                <Link to="/detail">
                    <button>ver más</button>
                </Link>
            </div>
        </div>
    );
};