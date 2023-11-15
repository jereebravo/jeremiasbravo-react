import { useEffect, useState } from "react"
import {getProduct} from '../../asyncMock'
import { useParams } from "react-router-dom";
import { ItemDetail } from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = () =>{

    const [product , setProduct] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        getProduct(id)
            .then( resp => setProduct(resp))
            .catch(err => console.log(err))
        }, [product])
        
    return(
        <>
        {product && <ItemDetail {...product} />}
    
        </>
    )
}