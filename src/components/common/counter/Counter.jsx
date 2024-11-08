import { useState } from "react"

const Counter = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        stock > contador ? setContador(contador + 1) : alert("stock maximo");
    }

    const restar = () => {
        setContador(contador > 1 ? contador - 1 : contador);
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