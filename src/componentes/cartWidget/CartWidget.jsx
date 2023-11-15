import React from 'react'
import * as images from "../../assets/img"
import "./Cart.css"

export const Carrito = () => {
  return (
    <div className='carrito'>
      <div className='notificacion'>1</div>
        <img src={images.cart} alt="carrito" className='icono' />
    </div>
  )
}
