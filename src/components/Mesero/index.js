import menu from "../../menu.json"
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase/connection.js"
import {useEffect, useState} from 'react'
export default function Orders(){
    //const [data, setData] = useState(menu.breakfast);
    //const [order, setOrder] = useState([]);
    const [total, setTotal] = useState([]);
//const showItemsBreakfast = () => {
    //return setData(menu.breakfast)
    const getBreakFast = async () => {
    const product = await getDocs(collection(db,'menu'));
    setTotal(product.docs.map((doc) => ({...doc.data(),id:doc.id}))
  )
 }
    useEffect(() => {
     getBreakFast()
    }, []);
return (
    <div id="ordersViewContainer">
        <div id="ordersMenuOptions">
            {total.map(item => (
                <div key={item.id}>
            <img src={item.image} alt=''/>
            <h1>{item.product}</h1>
            <h3>{item.price}</h3>
            <button className="buttonOrders"> Desayuno</button>
            </div>
            ))}
        </div>
    </div>
)
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