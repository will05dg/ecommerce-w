import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return (
        <Link to="/cart">
            <ShoppingCartIcon />
            <span> 0</span>
        </Link>
    )
}

export default CartWidget