import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
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

    //const funcionAgregar = () => {const productsColection = collection(db, "productosArte"); productosArte.forEach((productosArte) => { addDoc(productsColection, productosArte) })}

    return (
        <div className="grilla" >
            <ItemList myProductosArte={myProductosArte} />
        </div >

    )
}
