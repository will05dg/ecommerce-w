import { useState } from "react";

const Checkout = () => {

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        telefono: "",
    });

    const funcionDelFormulario = (evento) => {
        evento.preventDefault();
        console.log(userInfo);
    };

    const capturarInfo = (evento) => {
        const { name, value } = evento.target
        setUserInfo({ ...userInfo, [name]: value });
    };

    return (
        <div>
            <form onSubmit={funcionDelFormulario}>
                <input type="text" placeholder="will" name="name" onChange={capturarInfo} />
                <input type="email" placeholder="will@gmail.com" name="email" onChange={capturarInfo} />
                <input type="tel" placeholder="1144777888" name="telefono" onChange={capturarInfo} />

                <button type="submit">Comprar</button>
                <button type="button">Cancelar</button>
            </form>
        </div>
    )
}

export default Checkout