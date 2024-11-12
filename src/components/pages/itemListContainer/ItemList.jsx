import { Skeleton } from "@mui/material";
import { Card } from "../../common/Card/Card";

export const ItemList = ({ myProductosArte }) => {

    if (myProductosArte.length == 0) {
        return (
            <div className="grilla">
                <div className="cartasloadin">
                    <Skeleton variant="rectangular" width={221} height={200} className="imagenloandin" />
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                </div>
                <div className="cartasloadin">
                    <Skeleton variant="rectangular" width={221} height={200} className="imagenloandin" />
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                </div>
                <div className="cartasloadin">
                    <Skeleton variant="rectangular" width={221} height={200} className="imagenloandin" />
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                </div>
                <div className="cartasloadin">
                    <Skeleton variant="rectangular" width={221} height={200} className="imagenloandin" />
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                </div>
                <div className="cartasloadin">
                    <Skeleton variant="rectangular" width={221} height={200} className="imagenloandin" />
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                </div>
                <div className="cartasloadin">
                    <Skeleton variant="rectangular" width={221} height={200} className="imagenloandin" />
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                </div>
                <div className="cartasloadin">
                    <Skeleton variant="rectangular" width={221} height={200} className="imagenloandin" />
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                </div>
                <div className="cartasloadin">
                    <Skeleton variant="rectangular" width={221} height={200} className="imagenloandin" />
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                </div>
                <div className="cartasloadin">
                    <Skeleton variant="rectangular" width={221} height={200} className="imagenloandin" />
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                </div>
                <div className="cartasloadin">
                    <Skeleton variant="rectangular" width={221} height={200} className="imagenloandin" />
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                </div>
                <div className="cartasloadin">
                    <Skeleton variant="rectangular" width={221} height={200} className="imagenloandin" />
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={210} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={200} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} className="botonlondin" />
                </div>
            </div>)
    }

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