import "./itemDetail.css"

const ItemDetail = ({ item }) => {
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
                    <h4>stock:{item.stock}</h4>
                </div>
                <button>+</button>
                <button>-</button>
                <button>Agregar</button>
            </div>
        </div>
    )
};

export default ItemDetail;