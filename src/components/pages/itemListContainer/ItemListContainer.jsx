import "./itemListContainer.css";
import { productosArte } from "../../../productos";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";

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
            </div>)
    }

    return (
        <div className="grilla" >
            <ItemList myProductosArte={myProductosArte} />
        </div >

    )
}