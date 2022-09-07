import React from "react";
import { useCart } from "react-use-cart";

/*---------------- PRODUCTOS ----------------*/
const BreakfastProduct = (props) => {
  const { addItem } = useCart();

  return (
      <div className="itemProduct"  onClick={() => addItem(props.item)} key={props.id}>
        <img src={props.image} className="imgMenu" alt="imgMenu" />

        <div className="containerTextMenu">
          <p >{props.product} </p>
          <p >precio:s/.{props.price} </p>
        </div>
      </div>
  );
};
export default BreakfastProduct;