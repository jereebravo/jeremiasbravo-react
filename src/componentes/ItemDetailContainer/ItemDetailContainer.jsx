import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {db} from "../../config/firebaseConfig"
import {doc , getDoc} from "firebase/firestore"
import { ItemDetail } from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = () => {
    const [item , setItem] = useState(null);
    const id = useParams().id

    useEffect(() =>{

        const productRef = doc(db , "products" , id);
        getDoc(productRef)
           .then((resp) => {
            setItem({...resp.data() , id:resp.id})
           });

    }, [id])
   
   
      return(
        <>

        {item && <ItemDetail {...item} />}
    
        </>
    )




    }
  

        
   