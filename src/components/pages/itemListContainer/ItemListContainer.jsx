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
                console.log("siempre se ejecuta")
            })
    }, []);

    const myProductosArteMap = myProductosArte.map((prod) => prod.titulo)
    console.log(myProductosArteMap)


    return (
        <div className="grilla" >
            {myProductosArte.map((prod) => {
                return (
                    <Card
                        key={prod.id}
                        imagenSrc={prod.imagenSrc}
                        titulo={prod.titulo}
                        categoria={prod.categoria}
                        precio={prod.precio}
                        stock={prod.stock} />
                )
            })}
        </div >

    )
}