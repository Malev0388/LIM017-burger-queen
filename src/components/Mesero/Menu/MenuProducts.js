import React from 'react'
import { useCart } from 'react-use-cart';

/*----------------PRODUCTO DESAYUNO------------*/
const MenuProduct= (props) => {
  const { addItem } = useCart();

    return( 
      
      <div className='container-menu' >
      <div className='item-product' onClick={() => addItem(props.item)} key={props.id}>
        <img src={props.image} className='img-menu' alt="img-menu"/>

        <div className="container-text-menu">
          <p className='name-product'>{props.product} </p>
          <p className='precio'>precio:s/.{props.price} </p>    
        </div>  
          </div>
      </div>   
      
    );
}
export default MenuProduct;