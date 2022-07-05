//import React from "react";
import { useCart } from "react-use-cart";
import { db } from "../../../firebase/connection.js";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";

/*----------------SELECCION DE PRODUCTOS------------*/
const ProductSelection = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1> </h1>;

  ///////////
  /* const usersCollectionRefDos = collection(db,"orden");
     const [producto,product ] =  useState([]);
     const [precio, price] =  useState([""]);
     const enviar = async() =>{
        // await addDoc (usersCollectionRefDos,{product:precio, price:producto})
        await addDoc (usersCollectionRefDos,{product:producto,price:precio })
     };
     */

  /*const enviar = async()=>{
        const producto = item.product;
        const precio = this.price;
        const collectionRef = collection (db,"orden");
        const payload = {producto: producto, precio: precio};
        await addDoc( collectionRef,payload);
    }
    
     /<h5>
            cantidad de productos: ({totalUniqueItems}) total items:(
            {totalItems}){" "}
          </h5>*/

  ///
 /**
   onChange={(event)=>{ 
                    setTitle(event.target.value)
                  }}
  */

//


  return (
    <section className="py-4 container">
      <h1 className="text-center"> ORDEN </h1>
      <div className="row justify-content-center">
            <div>
              {items.map((item, id) => {      
                return (
                  <div key={id} >
                    <div className="container-product-selection">
                      <div > {item.product} </div>
                      <div className="buttons-options-products">
                        <button
                          className="btn-reduce-product"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        > {" "} - {" "} </button>
                        <div className="quantity-product"> {item.quantity} </div>
                        <button
                          className="btn-add-product"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >{" "}+{" "} </button>
                      </div>
                      <img
                          className="image-remove-all"
                          src="https://firebasestorage.googleapis.com/v0/b/burger-queen-d0e74.appspot.com/o/tacho-de-basura.png?alt=media&token=4cd950bd-0db1-4e95-84c5-3d91ede0a46f"
                          alt="img-tacho"
                          onClick={() => removeItem(item.id)}
                        ></img>
                    </div>
                  </div>
                );
              })}
            </div>
        <div>
          <h3>total:{cartTotal} </h3>
          <button >Enviar</button>
        </div>
      </div>
    </section>
  );
};
export default ProductSelection;

/*
 
 const usersCollectionRefDos = collection(db,"orden");
 const [producto, ] =  useState([]);
 const [precio, price] =  useState([""]);
 const showItemsBreakfast = async() =>{
    // await addDoc (usersCollectionRefDos,{product:precio, price:producto})
    await addDoc (usersCollectionRefDos,{product:producto,price:precio })
 };

 
    const usersCollectionRefDos = collection(db,"orden");
    //const [producto, product] =  useState([]);
   // const [producto, setNewAge] =  useState([""]);
    const createUser = async() =>{
       // await addDoc (usersCollectionRefDos,{product:precio, price:producto})
       await addDoc (usersCollectionRefDos,{product:menuProduct })
    };
////////////////////////////////////////////////////
const usersCollectionRefDos = collection(db,"orden");
 //const [producto, product] =  useState([]);
   // const [producto, setNewAge] =  useState([""]);
 const showItemsBreakfast = async() =>{
    // await addDoc (usersCollectionRefDos,{product:precio, price:producto})
    await addDoc (usersCollectionRefDos,{product:total })
 };
//////////////////////////////////////////////////
 <button onClick={showItemsBreakfast} className="buttonOrders">Agregar</button>
*/



