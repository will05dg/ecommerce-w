import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <h2>footer</h2>
            <Link to="/">
                <img src="https://res.cloudinary.com/dsphjfhea/image/upload/v1728271324/Mesa_de_trabajo_1_ekn2hk.svg" alt="logo de lapiz" className="logo" />
            </Link>
        </footer>
    )
}

export default Footer