import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import "./cartWidget.css"


const CartWidget = () => {
    return (
        <Link to="/cart">
            <Badge badgeContent={1} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </Link>
    )
}

export default CartWidget