import menu from "../../menu.json"
import {useEffect, useState, useContext} from 'react'

export default function Orders(){
    const [data, setData] = useState(menu.breakfast);
    const [order, setOrder] = useState([]);
    const [total, setTotal] = useState([]);
 
    
const showItemsBreakfast = () => {
    return setData(menu.breakfast)
};
return (
    <div id="ordersViewContainer">
        <div id="ordersMenuOptions">
            <button onclick={showItemsBreakfast} classname="buttonOrders"> Desayuno</button>
        </div>
        <div id="elementsOdersView">
            <h1> data={data} </h1>
        </div>
    </div>
)
}
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