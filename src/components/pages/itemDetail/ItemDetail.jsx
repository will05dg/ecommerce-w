import { Skeleton } from "@mui/material";
import Counter from "../../common/counter/Counter";
import "./itemDetail.css"

const ItemDetail = ({ item, onAdd, totalInCart }) => {

    if (item.imagenSrc === undefined) {
        return (<div className="targeta">
            <div>
                <Skeleton variant="rectangular" width={500} height={500} />
                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
            </div>
            <div>
                <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={500} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
            </div>
            <div>
                <div>
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={210} />
                </div>
                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
            </div>
        </div>)
    }

    return (
        <div className="detallesContenedor">
            <div>
                <img src={item.imagenSrc} alt="" className="detalleImagen" />
                <h3>categoria:{item.categoria}</h3>
            </div>
            <div>
                <h2>{item.titulo}</h2>
                <p>Desclipcion : {item.descripcion}</p>
                <h2>Precio: US ${item.precio}</h2>
            </div>
            <div>
                <Counter
                    stock={item.stock}
                    onAdd={onAdd}
                    totalInCart={totalInCart}
                />
            </div>
        </div>
    )
};

export default ItemDetail;