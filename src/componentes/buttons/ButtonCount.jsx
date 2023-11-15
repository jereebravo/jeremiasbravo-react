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

  console.log(count);
  
 
 
 
 
 
    return (
    <div className='buttonCount'>
        <div className='Contador'>
            <button className='sumar' onClick={sumar}> + </button>
            <strong>{count}</strong>
            <button className='restar' onClick={restar}> - </button>
        </div>
        <div className='agregarCarrito'>
            <button>agregar al carrito</button>
        </div>

    </div>
  )
}