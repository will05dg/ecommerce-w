import { Link } from "react-router-dom";
import CartWidget from "../../common/CartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
    return (
        <>
            <div className="container-navbar">
                <Link to="/">
                    <img src="https://res.cloudinary.com/dsphjfhea/image/upload/v1728271324/Mesa_de_trabajo_1_ekn2hk.svg" alt="logo de lapiz" className="logo" />
                </Link>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/category/Dibujo"}>Dibujo</Link>
                    </li>
                    <li>
                        <Link to={"/category/Pintura"}>Pintura</Link>
                    </li>
                    <li>
                        <Link to={"/category/Accesorios"}>Accesorios</Link>
                    </li>

                </ul>
                < CartWidget />
            </div>
        </>
    );
};
