import "./itemListContainer.css";
import { productosArte } from "../../../productos";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

    const { categoria } = useParams();

    const [myProductosArte, setMyProductoArte] = useState([])

    useEffect(() => {

        const fraccion = productosArte.filter(producto => producto.categoria === categoria);

        const myProductosArtePromise = new Promise((resolve) => {
            resolve(categoria ? fraccion : productosArte);
        });

        myProductosArtePromise
            .then((data) => {
                setTimeout(() => {
                    setMyProductoArte(data)
                }, 2000);
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
            })
    }, [categoria]);

    if (myProductosArte.length == 0) {
        return <h2>cargando ...</h2>
    }

    return (
        <div className="grilla" >
            <ItemList myProductosArte={myProductosArte} />
        </div >

    )
}