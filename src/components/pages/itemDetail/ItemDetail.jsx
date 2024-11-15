import { Skeleton } from "@mui/material";
import Counter from "../../common/counter/Counter";
import "./itemDetail.css"

const ItemDetail = ({ item, onAdd, totalInCart }) => {

    if (item.imagenSrc === undefined) {
        return (<div className="targeta">
            <Skeleton variant="rectangular" width={450} height={450} />
            <div>
                <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={500} />
                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
            </div>
        </div>)
    }

    return (
        <div className="detallesContenedor">
            <img src={item.imagenSrc} alt="" className="detalleImagen" />
            <div>
                <div>
                    <h2>{item.titulo}</h2>
                    <p>{item.descripcion}</p>
                </div>
                <div>
                    <h3>precio: US ${item.precio}</h3>
                    <h4>categoria:{item.categoria}</h4>
                </div>

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