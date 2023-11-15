import React from 'react'
import "./Item.css"

export const Item = ( {id , name , image , description , price} ) => {
  return (
    <div className='card'>
      <div>
        <img className="card-image" src={image} alt={name} />
      </div>
      <div className='card-things'>
        <h2>{name}</h2>
        <p>{"$"}{price}</p>
        <button className='buton-detail'>detalles</button>
      </div>
    </div>
  )
}
