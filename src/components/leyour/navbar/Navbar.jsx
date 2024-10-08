import CartWidget from "../../common/CartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
    return (
        <>
            <div className="container-navbar">
                <img src="https://res.cloudinary.com/dsphjfhea/image/upload/v1728271324/Mesa_de_trabajo_1_ekn2hk.svg" alt="logo de lapiz" className="logo" />
                <ul>
                    <li>productos</li>
                    <li>marcas</li>
                    <li>tintas</li>
                </ul>
                < CartWidget />
            </div>
        </>
    );
};
