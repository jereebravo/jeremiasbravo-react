import React from 'react'
import "./ItemListContainer.css"

export const ItemListContainer = ({greeting}) => {
  return (
    <main className='main'>
      <div className='container'>
      <p>{greeting}</p>
    </div>
    </main>
    
  )
}
