import React, { useContext, useState } from 'react'
import "./ButtonCount.css"
import { CartContext } from '../../context/cartContext';

export const ButtonCount = ({ name, stock, image ,price , id }) => {
  let [count , setCount ] = useState(1);
  const {cart , addItemCart} = useContext(CartContext)
 const itemRef = {
  name,
  stock,
  image,
  price,
  id
 }

  let sumar = () =>{
    if(stock > count){
      return setCount(count + 1);
    }
    else{
      return setCount(count)
    }
   
  }

  let restar =() =>{

    if(count === 1){
        return count
    }
    else{
        setCount(count - 1);
    }

  }
 
  const handleAdd = () => {
    addItemCart( itemRef , count)
  }
 
  console.log(cart);
    return (
    <div className='buttonCount'>
        <div className='Contador'>
            <button className='sumar' onClick={restar}> - </button>
            <strong>{count}</strong>
            <button className='restar' onClick={sumar}> + </button>
        </div>
        <div className='agregarCarrito'>
            <button className='addCart' onClick={handleAdd} >agregar al carrito</button>
        </div>

    </div>
  )
}