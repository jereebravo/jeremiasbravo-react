import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import productos from "../../asyncMock"
import "./ItemListContainer.css"


export const ItemListContainer = () => {
let [products , setProducts] = useState([])

  const getProducts = () => {
    return new Promise((resolve , reject) => {
         resolve(productos);
       });
  };

   useEffect(() => {
    getProducts()
    .then((res => {
      setProducts(res);
    }))
 })


  

  return (
    <div className='main'>
      {<ItemList products={products} />}
     </div>
    
  )
}
