import "./card.css";

export const Card = ({ titulo, categoria, precio, stock, imagenSrc }) => {
    return (
        <div className="cartas">
            <img src={imagenSrc} alt="" />
            <div className="texto">
                <h3>{titulo}</h3>
                <h3>precio: US ${precio}</h3>
                <h4>categoria: {categoria}</h4>
                <h4>stock: {stock}</h4>
                <button>ver más</button>
            </div>
        </div>
    )
}