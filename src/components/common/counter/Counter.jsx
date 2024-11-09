import { useState } from "react"

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
            <div>
                <button onClick={restar}>-</button>
                <button onClick={sumar}>+</button>
            </div>
            <h2>Productos:{contador}</h2>
            <button onClick={() => onAdd(contador)}>Agregar</button>
        </div>
    )
}

export default Counter