import React from "react";
import { useCart } from "react-use-cart";
import { db } from "../../firebase/connection.js";
import {useState, useEffect} from 'react';
import { collection, addDoc } from "firebase/firestore";



/*----------------SELECCION DE PRODUCTOS------------*/
 const ProductSelection = () =>{
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

     if(isEmpty) return <h1 className="text-center">soy un carrito</h1>
     
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
    }*/

    ///
     return(
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>cantidad de productos: ({totalUniqueItems}) total items:({totalItems}) </h5>
                    <table className="table">
                        <tbody>
                            {items.map((item,id)=>{
                                return(
                                    <tr key ={id}>
                                        <td>
                                            <img src={item.image} style={{height:'6rem'}}></img>
                                        </td>
                                        <td>{item.product} </td>
                                        <td>precio: s/.{item.price} </td>
                                        <td>cantidad({item.quantity}) </td>
                                        <td>
                                            <button className="btn btn-info ms-2"
                                            onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}
                                            > - </button>
                                            <button className="btn btn-info ms-2"
                                            onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}        
                                            > + </button>
                                            <button className="btn btn-info ms-2"
                                            onClick={()=> removeItem(item.id)}
                                            >Eliminar</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
                <div>
                    <h3>total:{cartTotal} </h3>
                    <button >Enviar</button>
                </div>
            </div>
        </section>
     )
 }
 export default ProductSelection
 
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