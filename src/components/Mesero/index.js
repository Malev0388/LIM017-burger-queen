import React, { useState, useEffect } from 'react'

import importBreakfast from '../../firebase/menu.js'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from "../../firebase/connection.js"

//import {Link} from 'react-router-dom'

export default function Index(){
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
}


