import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/cartContext";
import {CartItem} from "../cartItem/CartItem"
import {Form} from '../form/Form'

export const Cart = () => {
  const {cart , emptyCart} = useContext(CartContext);

  const handleEmptyCart = () =>{
    emptyCart();
  }


    return (
    <div className="container mt-5 mb-5">
    <div className="d-flex justify-content-center row">
        <div className="col-md-8">
            <div className="p-2">
                <h4>Shopping cart</h4>
               
                <div>
                 {
                    cart.map((product) => (
                        <CartItem
                         key={product.id} 
                         product={product}/>
                    ))
                 }
                 <button type="button" className="btn btn-outline-secondary" onClick={handleEmptyCart}>Vaciar</button>

                </div>

            

        </div>
    </div>
</div>
</div>

   
        

    )
}