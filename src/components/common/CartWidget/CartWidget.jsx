import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import "./cartWidget.css"
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    let total = cart.reduce((acumulador, elemento) => { return acumulador + elemento.quantity }, 0)

    return (
        <Link to="/cart">
            <Badge badgeContent={total} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </Link>
    )
}

export default CartWidget