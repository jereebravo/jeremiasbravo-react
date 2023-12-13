import { useState } from "react";
import { ButtonCount } from "../buttons/ButtonCount";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ name, price, description, stock, image , id }) => {
  
  
  




  return (
    <>
     <div className="Main">
      <div className="detalles">
        <div>
          <img className="imageDetail" src={image} alt="" />
        </div>
        <div className="detailItem">
          <p className="titulo">{name}</p>
          <p className="description">{description}</p>
          <p className="text">stock: {stock}</p>
          <p className="text">
            precio: {"$"}
            {price}
          </p>
        </div>
        <div>
          {" "}
          <ButtonCount 
          name={name}
          price={price}
          id={id}
          stock={stock}
          image={image}
          />
          {" "}
        </div>
      </div>
    </div>
    </>
   
  );
};
