import { collection, getDocs, addDoc } from 'firebase/firestore';
import {db} from '../../firebase/connection.js'
import {useEffect, useState} from 'react'
export default function Orders(){
    //const [data, setData] = useState(menu.breakfast);
    //const [order, setOrder] = useState([]);
    const [total, setTotal] = useState([]);
    const getBreakFast = async () => {
    const data = await getDocs(collection(db,'menu'));
    setTotal(data.docs.map((doc) => ({...doc.data(),id:doc.id}))
  )
 }
//////////////////////////
const usersCollectionRefDos = collection(db,'orden');
 const showItemsBreakfast = async() =>{
    // await addDoc (usersCollectionRefDos,{product:precio, price:producto})
    await addDoc (usersCollectionRefDos,{product:total })
 };
////////////////////////
    useEffect(() => {
     getBreakFast()
    }, []);
return (
    <div id='ordersViewContainer'>
        <div id='ordersMenuOptions'>
            {total.map(item => (
                <div key={item.id}>
            <img src={item.image} alt=''/>
            <h1>{item.product}</h1>
            <h3>{item.price}</h3>
            <button onClick={showItemsBreakfast} className='buttonOrders'>Agregar</button>
            </div>
            ))}
        </div>
    </div>
)
}
//<button onClick={showItemsBreakfast} className=“buttonOrders”>Desayuno</button>

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