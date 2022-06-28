import React, { useEffect, useState } from "react";
import "./style.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/connection.js";

export default function Index(props) {
  const [total, setTotal] = useState([]);

  //const showItemsBreakfast = () => {
  //return setData(menu.breakfast)
  const getBreakFast = async () => {
    const product = await getDocs(query(collection(db,'menu'), where("type", "==", "bebida")))

  //const showItemsBreakfast = () => {
  //return setData(menu.breakfast)
  const getBreakFast = async () => {
    const product = await getDocs(collection(db, "menu"));
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
            <div className="item-product" key={item.id}>
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

/*import menu from "../../menu.json"
import {useState} from 'react'

export default function Orders(){
    const [data, setData] = useState(menu.breakfast);
    //const [order, setOrder] = useState([]);
    //const [total, setTotal] = useState([]);
 
    
const showItemsBreakfast = () => {
    return setData(menu.breakfast)
};
return (
    <div id="ordersViewContainer">
        <div id="ordersMenuOptions">
            <button onClick={showItemsBreakfast} className="buttonOrders"> Desayuno</button>
        </div>
    </div>
)
}*/
/*import React, { useState, useEffect } from 'react'

import importBreakfast from '../../firebase/menu.js'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from "../../firebase/connection.js"

//import {Link} from 'react-router-dom'

/*export default function Index(){
    const [menu, setMenu] = useState([]);

    useEffect(() => {  
    const breakfast = query(collection(db, "menu"), where("type", "==", "breakfast"));
    const importBreakfast = onSnapshot(breakfast, (snapshot) => 
        setMenu(snapshot.docs.map(producto =>({...producto.data()}))))
    return importBreakfast
    }, []);

    console.log(menu);


    return(
        <div>Mesero</div>

    )
}*/
