import Counter from "../../common/counter/Counter";
import "./itemDetail.css"

const ItemDetail = ({ item, onAdd, totalInCart }) => {
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