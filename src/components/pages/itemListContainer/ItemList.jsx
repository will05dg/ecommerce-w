import { Skeleton } from "@mui/material";
import { Card } from "../../common/Card/Card";

export const ItemList = ({ myProductosArte }) => {

    let array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }]

    if (myProductosArte.length === 0) {
        return array.map(({ id }) => (
            <div key={id}>
                <div className="cartasloadin">
                    <Skeleton variant="rectangular" width={221} height={200} className="imagenloandin" />
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                </div>
            </div>)
        )
    };

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