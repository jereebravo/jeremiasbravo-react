import { useEffect, useState } from "react"
import {getProduct} from '../../asyncMock'
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () =>{

    const [product , setProduct] = useState(null);

    let { id } = useParams;

    useEffect(() => {
        getProduct(id)
            .then( resp => setProduct(resp))
            .catch(err => alert("error"))
        }, [product])
    return(
        <>
        {product && <ItemDetail {...product} />}
    
        </>
    )
}