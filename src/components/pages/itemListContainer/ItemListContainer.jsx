import { Card } from "../../common/Card/Card"
import "./itemListContainer.css";
import { productosArte } from "../../../productos";
import { useEffect, useState } from "react";

let myProductosArtePromise = new Promise((res, rej) => {
    setTimeout(() => {
        if (productosArte.length === 0) {
            rej("productos vacios");
        } else {
            res(productosArte)
        }
    }, 2000)
});

export const ItemListContainer = () => {

    const [myProductosArte, setMyProductoArte] = useState([])

    useEffect(() => {
        myProductosArtePromise
            .then((data) => {
                setMyProductoArte(data)
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                console.log("finalizado")
            })
    }, []);

    return (
        <div className="grilla" >
            {myProductosArte.map(({ id, titulo, categoria, precio, stock, imagenSrc }) => {
                return (
                    <Card
                        key={id}
                        imagenSrc={imagenSrc}
                        titulo={titulo}
                        categoria={categoria}
                        precio={precio}
                        stock={stock}
                    />
                )
            })}
        </div >

    )
}