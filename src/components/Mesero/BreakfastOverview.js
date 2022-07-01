import React, { useEffect, useState } from "react";
import "./style.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/connection.js";
import BreakfastProduct from "./BreakfastProduct.js";
import ProductSelection from "./ProductSelection.js";


/*----------------VISTA GENERAL DESAYUNO------------*/
const BreakfastOverview = () =>{

  const [total, setTotal] = useState([]);
  const getBreakFast = async () => {
    const product = await getDocs(query(collection(db,'menu'), where("type", "==", "bebida")))
    setTotal(product.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getBreakFast();
  }, []);
  return (

    <div className="mesero">
      <header className="header">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/burger-queen-d0e74.appspot.com/o/logo-bq.PNG?alt=media&token=ff5fc092-8e35-45fc-ab81-6b4a4a7efa45"
          alt="logo-bq"
          className="logo-bq"
        />
      </header>        
      <ul>
        <li><a className="button-desayuno" href="#Desayuno">DESAYUNO</a></li>
        <li><a className="button-menu" href="#Menu">MENÚ</a></li>
        <li><a className="button-pedidos" href="#Pedidos">PEDIDOS LISTOS</a></li>
      </ul>         
      <div className="container-mesero">
        <div className="">
        {total.map((item )=>{
                    return(          
                       <BreakfastProduct 
                       image={item.image} 
                       product={item.product} 
                       price={item.price} 
                       key={item.id}
                       item={item}
                       ></BreakfastProduct>  
                    )
                })}
        </div>

        <div className="car">
         <ProductSelection></ProductSelection>

        </div>
      </div>
    </div>
  );
}
export default BreakfastOverview;
/*
////////////////////////////////////////////////////
const usersCollectionRefDos = collection(db,"orden");
 const showItemsBreakfast = async() =>{
    // await addDoc (usersCollectionRefDos,{product:precio, price:producto})
    await addDoc (usersCollectionRefDos,{product:total })
 };
//////////////////////////////////////////////////
 <button onClick={showItemsBreakfast} className="buttonOrders">Agregar</button>
*/
/*
export default function Index() {
  const [total, setTotal] = useState([]);
  const getBreakFast = async () => {
    const product = await getDocs(query(collection(db,'menu'), where("type", "==", "bebida")))
    setTotal(product.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getBreakFast();
  }, []);
  return (
    <div className="mesero">
      <header className="header">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/burger-queen-d0e74.appspot.com/o/logo-bq.PNG?alt=media&token=ff5fc092-8e35-45fc-ab81-6b4a4a7efa45"
          alt="logo-bq"
          className="logo-bq"
        />
      </header>

      <div className="buttons-mesero">
        <div className="button-desayuno"> Desayuno </div>
        <div className="button-menu"> Menu </div>
        <div className="button-pedidos"> Pedidos Listos </div>
      </div>


      <div className="container-mesero">
        <div className="container-menu">
        {total.map((item) => (
            <div className="item-product" id={item.id}>
          <img
            className="img-menu"
            src={item.image}
            alt="img-menu"
          />
          <div className="container-text-menu">
            <p className="name-product"> {item.product} </p>
            <p className="precio"> S/. {item.price} </p>
          </div>
          </div>
          ))}
        </div>

        <div className="car">
          <p> Esta es la parte del carrito </p>
        </div>
      </div>

    </div>
  );
}
*/