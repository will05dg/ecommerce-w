import "./itemListContainer.css";
import { productosArte } from "../../../productos";
import { useEffect, useState } from "react";
import { ItemList } from "../../common/ItemList/ItemList";

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
            <ItemList myProductosArte={myProductosArte} />
        </div >

    )
}