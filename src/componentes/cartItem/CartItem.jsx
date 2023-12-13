import React from "react";
export const CartItem = ({product}) => {



return( 
   <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
  <div className="mr-1">
    <img
      className="rounded"
      src={product.image}
      width="70"
      alt={product.name}
    />
  </div>
  <div className="d-flex flex-column align-items-center product-details">
    <span className="font-weight-bold">{product.name}</span>
  </div>
  <div className="d-flex flex-row align-items-center qty">
    <i className="fa fa-minus text-danger"></i>
    <h5 className="text-grey mt-1 mr-1 ml-1">{product.quantity}</h5>
    <i className="fa fa-plus text-success"></i>
  </div>
  <div>
    <h5 className="text-grey">${product.price * product.quantity}</h5>
  </div>
  <div className="d-flex align-items-center">
    <i className="fa fa-trash mb-1 text-danger"></i>
  </div>
</div>)
}