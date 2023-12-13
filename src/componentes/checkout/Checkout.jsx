import React, { useState } from 'react'
import "./Checkout.css"
import {Form} from "../form/Form"
import {Cart} from "../cart/Cart"


export const Checkout = () => {
const [showForm , setShowForm] = useState(true);
  const handleShowform = () =>{
    setShowForm(false)
    
  }
  return (
    <div className='w-100'>
        <div className='CartCheck'>
           {showForm ? (<Form onFormSubmit={handleShowform}/>)
           : <Cart /> } 
            

        </div>
    </div>
   
            
         
   
        
    
  )
}
