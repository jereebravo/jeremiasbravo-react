import React, { useContext } from 'react'
import * as images from "../../assets/img"
import "./Cart.css"
import { CartContext } from '../../context/cartContext'

export const Carrito = () => {
  const { quantityInCart } = useContext(CartContext);

  return (
    <div className='carrito'>
      <div className='notificacion'>{quantityInCart()}</div>
        <img src={images.cart} alt="carrito" className='icono' />
    </div>
  )
}
