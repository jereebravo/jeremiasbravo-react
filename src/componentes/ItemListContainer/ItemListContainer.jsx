import React, { useState , useEffect } from 'react'
import {db} from "../../config/firebaseConfig"
import {query , collection, getDocs , where} from "firebase/firestore"
import { ItemList } from '../ItemList/ItemList'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'


export const ItemListContainer = () => {
 

  
      const [products , setProducts] = useState([]);
      const category = useParams().category;
   
      useEffect( () =>{
        const productsRef = collection(db , "products");
        const q = category ? query(productsRef , where("category" , "==" , category)) : productsRef;

        getDocs(q)
          .then((resp) => {

            setProducts(
              resp.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
              })
            )
          })
  
  
      }, [category])

 

      


  

  return (
    <div className='main'>
        {  <ItemList products={products} />}

      
     </div>
    
  )
}
