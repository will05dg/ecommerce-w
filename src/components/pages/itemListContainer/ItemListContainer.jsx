import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore"

export const ItemListContainer = () => {

    const { categoria } = useParams();

    const [myProductosArte, setMyProductoArte] = useState([])

    useEffect(() => {
        const productsColection = collection(db, "productosArte");

        let docsRef = productsColection;

        if (categoria) {
            docsRef = query(productsColection, where("categoria", "==", categoria));
        }

        getDocs(docsRef).then((res) => {
            let arrayEntendible = res.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });

            setMyProductoArte(arrayEntendible);
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

    //const funcionAgregar = () => {const productsColection = collection(db, "productosArte"); productosArte.forEach((productosArte) => { addDoc(productsColection, productosArte) })}

    return (
        <div className="grilla" >
            <ItemList myProductosArte={myProductosArte} />
        </div >

    )
}
