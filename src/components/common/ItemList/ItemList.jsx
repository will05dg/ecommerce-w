import { Card } from "../Card/Card";

export const ItemList = ({ myProductosArte }) => {
    return myProductosArte.map(({ id, titulo, categoria, precio, stock, imagenSrc }) => (
        <Card
            key={id}
            imagenSrc={imagenSrc}
            titulo={titulo}
            categoria={categoria}
            precio={precio}
            stock={stock}
            id={id}
        />
    ));
};