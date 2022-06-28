import React from 'react'

const ItemCard = (props) => {
  console.log("as")
  console.log(props)
    return( 
    
      <div className="container-mesero">
        <div className="container-menu">
            <div className="item-product" id={props.id}>
          <img
            className="img-menu"
            src={props.image}
            alt="img-menu"
          />
          <div className="container-text-menu">
            <p className="name-product"> {props.product} </p>
            <p className="precio"> S/. {props.price} </p>
          </div>
          </div>
        </div>
        
        
      </div>
      
    );
}
export default ItemCard;

/*
 <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div className='card p-0 overflow-hidden h-100 shadow'>
          <img src={props.image} className='card-img-top img-fluid'/>
          <div className='card-body'>
          <div id={props.id}>
            <h5 className='card-title'>{props.product} </h5>
            <p className='card-text'>{props.price} </p>
            <button className='btn btn-success'>Agregar</button>
            </div>
          </div>
        </div>
      </div>
*/