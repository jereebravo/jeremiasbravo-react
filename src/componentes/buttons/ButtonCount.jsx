import React, { useState } from 'react'
import "./ButtonCount.css"

export const ButtonCount = () => {
 let [count , setCount ] = useState(0);

  let sumar = () =>{
   return setCount(count + 1);
  }

  let restar =() =>{

    if(count === 0){
        return count
    }
    else{
        setCount(count - 1);
    }

  }

  
  
 
 
 
 
 
    return (
    <div className='buttonCount'>
        <div className='Contador'>
            <button className='sumar' onClick={restar}> - </button>
            <strong>{count}</strong>
            <button className='restar' onClick={sumar}> + </button>
        </div>
        <div className='agregarCarrito'>
            <button className='addCart'>agregar al carrito</button>
        </div>

    </div>
  )
}