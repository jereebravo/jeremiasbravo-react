import React, { useState , useEffect } from 'react'
import {db} from "../../config/firebaseConfig"
import {query , collection, getDocs} from "firebase/firestore"
import { ItemList } from '../ItemList/ItemList'
import "./ItemListContainer.css"


export const ItemListContainer = () => {
 

  
      const [products , setProducts] = useState([]);
   
      useEffect( () =>{
          const myProducts = query(collection(db , "products"));
             getDocs(myProducts)
                .then((resp) =>{
                  const productsList = resp.docs.map((doc) => ({id: doc.id , ...doc.data()}))
                  setProducts(productsList);
                })
                
  
  
      }, [])

 

      


  

  return (
    <div className='main'>
        {  <ItemList products={products} />}

      
     </div>
    
  )
}
