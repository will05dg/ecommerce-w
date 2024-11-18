import { useState } from "react"
import "./counter.css"

const Counter = ({ stock, onAdd, totalInCart }) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        stock - totalInCart > contador ? setContador(contador + 1) : alert("stock maximo");
    }

    const restar = () => {
        contador > 1 && setContador(contador - 1);
    }

    return (
        <div>
            <div className="contador">
                <button onClick={restar}>-</button>
                <h2 className="cantidad">{contador}</h2>
                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(contador)}>Agregar</button>
            </div>
        </div>
    )
}

export default Counter