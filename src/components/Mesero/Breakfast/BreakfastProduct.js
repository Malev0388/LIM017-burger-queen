import React from "react";
import { useCart } from "react-use-cart";

/*----------------PRODUCTO DESAYUNO------------*/
const BreakfastProduct = (props) => {
  const { addItem } = useCart();

  return (
      <div className="item-product"  onClick={() => addItem(props.item)} key={props.id}>
        <img src={props.image} className="img-menu" alt="img-menu" />

        <div className="container-text-menu">
          <p className="name-product">{props.product} </p>
          <p className="precio">precio:s/.{props.price} </p>
        </div>
      </div>
  );
};
export default BreakfastProduct;
// <button className='btn btn-success'onClick={addItem(props.item)}>Agregar</button>

/*
import React from 'react'
const ItemCard = (props) => {
    return( 
      <div className='container-menu'>
      <div className='item-product' id={props.id}>
        <img src={props.image} className='img-menu' alt="img-menu"/>

        <div className="container-text-menu">
          <p className='name-product'>{props.product} </p>
          <p className='precio'>{props.price} </p>
          <button className='btn btn-success'>Agregar</button>
        </div>  
          </div>
      </div>      
    );
}
export default ItemCard;
      
 */
