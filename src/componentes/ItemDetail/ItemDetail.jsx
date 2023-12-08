import { ButtonCount } from "../buttons/ButtonCount";
import * as images from "../../assets/img/index";
import "./ItemDetail.css";

export const ItemDetail = ({ name, price, description, stock, image }) => {
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
          <ButtonCount />{" "}
        </div>
      </div>
    </div>
    </>
   
  );
};
