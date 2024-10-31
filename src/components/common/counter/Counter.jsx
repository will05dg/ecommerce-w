import { useState } from "react"

const Counter = ({ stock, agregarAlCarrito }) => {

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
                <button onClick={sumar}>+</button>
                <h2>Productos:{contador}</h2>
                <button onClick={restar}>-</button>
            </div>
            <button onClick={() => agregarAlCarrito(contador)}>Agregar</button>
        </div>
    )
}

export default Counter