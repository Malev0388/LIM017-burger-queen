import { collection, getDocs, addDoc , where, query} from "firebase/firestore";
import {db} from "../../firebase/connection.js"
import {useEffect, useState} from 'react'
import './style.css'

import ItemCard from './pruebaBoost.js'


export default function Orders(){
    const [total, setTotal] = useState([]);
    const getBreakFast = async () => {
    const data = await getDocs(query(collection(db,'menu'), where("type", "==", "bebida")))

    setTotal(data.docs.map((doc) => ({...doc.data(),id:doc.id}))
  )
 }
////////////////////////////////////////////////////
const usersCollectionRefDos = collection(db,"orden");
 const showItemsBreakfast = async() =>{
    // await addDoc (usersCollectionRefDos,{product:precio, price:producto})
    await addDoc (usersCollectionRefDos,{product:total })
 };
//////////////////////////////////////////////////
    useEffect(() => {
     getBreakFast()
    }, []);
     return (
         <div id="ordersViewContainer">
             <h1 className="text-center mt-3">hola</h1>
             <section className="py-4 container">
                 <div className=" row justify-content-center">
                 {total.map((item )=>{
                     console.log("dos")
                     console.log(item)
                     return(
                        <ItemCard image={item.image} product={item.product} price={item.price} id={item.id} ></ItemCard>   
                     )
                 })}
                 </div>
             </section>
    </div>
)
}





//<button onClick={showItemsBreakfast} className="buttonOrders">Desayuno</button>

/*
export default function Orders(){
    //const [data, setData] = useState(menu.breakfast);
    //const [order, setOrder] = useState([]);
    const [total, setTotal] = useState([]);
    const getBreakFast = async () => {
    const data = await getDocs(collection(db,'menu'));
    setTotal(data.docs.map((doc) => ({...doc.data(),id:doc.id}))
  )
 }
////////////////////////////////////////////////////
const usersCollectionRefDos = collection(db,"orden");
 const showItemsBreakfast = async() =>{
    // await addDoc (usersCollectionRefDos,{product:precio, price:producto})
    await addDoc (usersCollectionRefDos,{product:total })
 };
//////////////////////////////////////////////////
    useEffect(() => {
     getBreakFast()
    }, []);
     return (
         <div id="ordersViewContainer">
          <div>
           <button type="button" className="btn btn-primary">Primary</button>
           <button type="button" className="btn btn-secondary">Secondary</button>
           <button type="button" className="btn btn-success">Success</button>
          </div>

          <div id="ordersMenuOptions">
            {total.map(item => (
                <div key={item.id}>

            <img src={item.image} alt='' width="320" height="300"/>
            
            <h1>{item.product}</h1>
            <h3>{item.price}</h3>
            <button onClick={showItemsBreakfast} className="buttonOrders">Agregar</button>
            </div>
            ))}
        </div>
    </div>
)
}
*/