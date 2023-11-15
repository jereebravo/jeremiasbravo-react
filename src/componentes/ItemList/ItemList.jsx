import React from 'react'
import {Item} from "../Item/Item"
import "./ItemList.css"

export const ItemList = ( { products } ) => {
  return (
    <>
    <div className='productos'>
        {products.map((product) => (
          
          <Item key={product.id} {...product} /> ))}
      </div>
 

   </>
   );
  };
 