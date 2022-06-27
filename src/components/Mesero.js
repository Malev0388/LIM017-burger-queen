import React from 'react'
//import {Link} from 'react-router-dom'
import '../assets/css/Welcome.css';
import {useState, useEffect} from 'react';
import {db} from '../firebase/connection.js';
import {collection, getDocs, addDoc} from 'firebase/firestore';

export default function Mesero(){
    const [menuProduct, setUsers] = useState([]);
    const usersCollectionRef = collection(db,"menu");
/////////

    const usersCollectionRefDos = collection(db,"orden");
    //const [producto, product] =  useState([]);
   // const [producto, setNewAge] =  useState([""]);
    const createUser = async() =>{
       // await addDoc (usersCollectionRefDos,{product:precio, price:producto})
       await addDoc (usersCollectionRefDos,{product:menuProduct })
    };
/////////
    useEffect (() =>{
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
        getUsers()
    },[]);
 
    return (
        <div>          
            {menuProduct.map((product) => {
                return (
                    <button onClick={createUser} key={product.id}>
                    <div >
                        {""}
                        <h3 >nombre del producto: {product.product} </h3>
                        <h4>precio: {product.price} </h4>    
                    </div>
                    </button>
                );
            })}
        </div>
    );
   
}

/* 
const [name, setNewName] =  useState([""]);
const [age, setNewAge] =  useState([""]);
const createUser = async() =>{
       await addDoc (usersCollectionRefDos,{product:name, price:age})
    };

<input placeholder="name"
onChange={(event) =>{ setNewName(event.target.value)}}></input>

<input placeholder="age" type="number"
onChange={(event) =>{setNewAge(event.target.value)}}></input>

<button Onclick={createUser}>soy un boton </button>
*/


/*e const [menuProduct, setUsers] = useState([]);
    const usersCollectionRef = collection(db,"menu")
    useEffect (() =>{
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
        getUsers()
    },[]);

    return (
        <div>
            {menuProduct.map((product) => {
                return (
                    <div key={product.id}>
                        {""}
                        <h3>nombre del producto: {product.product} </h3>
                        <h4>precio: {product.price} </h4>
                        <button onclick={createUser}>soy un boton</button>
                    </div>
                );
            })}
        </div>
    );
   
    )
}*/