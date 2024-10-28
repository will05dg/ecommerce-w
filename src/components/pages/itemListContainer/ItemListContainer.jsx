import "./itemListContainer.css";
import { productosArte } from "../../../productos";
import { useEffect, useState } from "react";
import { ItemList } from "../../common/ItemList/ItemList";
import { useParams } from "react-router-dom";

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

    const { categoria } = useParams();


    const [myProductosArte, setMyProductoArte] = useState([])

    useEffect(() => {

        const fraccion = productosArte.filter(producto => producto.categoria === categoria);

        const myProductosArtePromise = new Promise((resolve) => {
            resolve(categoria ? fraccion : productosArte);
        });

        myProductosArtePromise
            .then((data) => {
                setMyProductoArte(data)
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
            })
    }, [categoria]);

    return (
        <div className="grilla" >
            <ItemList myProductosArte={myProductosArte} />
        </div >

    )
}