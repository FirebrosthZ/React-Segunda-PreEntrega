import '../../styles/ContainerCardsItems.css'
import CardItem from "./CardItem";
import fetchSimultion from "../../utils/fetchSimultion";
import productos from "../../utils/products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ContainerCardItems = () => {
    const [ datos, setDatos] = useState( [] );
    let {idCatergory} = useParams()

    useEffect(() => {
        if (idCatergory == undefined) {
            fetchSimultion(productos, 2000)
            .then (resp => setDatos(resp))
            .catch(error => console.log(error))  
        }else {
            fetchSimultion(productos.filter(filter => filter.type == idCatergory), 2000)
            .then (resp => setDatos(resp))
            .catch(error => console.log(error))
        }
    },[idCatergory]);

    return(
        <div className="containerCardItems">
        {
            datos.map(product => (
                <CardItem
                    key={product.id}
                    imagen={product.imageProduct.firtsImage}
                    title={product.title}
                    cantidad={product.stock}
                    precio={product.price}
                />
            ))
        }
        
        </div>
    )
}

export default ContainerCardItems;