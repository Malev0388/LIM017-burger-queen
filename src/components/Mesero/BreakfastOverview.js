import React, { useEffect, useState } from "react";
import "./style.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/connection.js";
import BreakfastProduct from "./BreakfastProduct.js";
import ProductSelection from "./ProductSelection.js";

/*----------------VISTA GENERAL DESAYUNO------------*/
export const BreakfastOverview = () =>{

  const [total, setTotal] = useState([]);
  const getBreakFast = async () => {
    const product = await getDocs(query(collection(db,'menu'), where("type", "==", "breakfast")))
    setTotal(product.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getBreakFast();
  }, []);
  return (
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

        <div className="car" id="page2">
         <ProductSelection>
         </ProductSelection>
        </div>
      </div>
  );
}

export default BreakfastOverview;

/*
import React, { useEffect, useState } from "react";
import "./style.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/connection.js";
import BreakfastProduct from "./BreakfastProduct.js";
import ProductSelection from "./ProductSelection.js";

const BreakfastOverview = () =>{

  const [total, setTotal] = useState([]);
  const getBreakFast = async () => {
    const product = await getDocs(query(collection(db,'menu'), where("type", "==", "lunch")))
    setTotal(product.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getBreakFast();
  }, []);
  ///////////////////////
  const [isShown, setIsShown] = useState(true);
  const handleClick = event => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
  }; 
  //////////////////////
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
        <li><a className="button-desayuno" onClick={handleClick}>DESAYUNO</a></li>
        <li><a className="button-menu" onClick={handleClick}>MENÚ</a></li>
        <li><a className="button-pedidos" >PEDIDOS LISTOS</a></li>
      </ul>

      <div className="container-mesero" id="Desayuno" 
      style={{display: isShown ? 'block' : 'none'}}>
        
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
         <ProductSelection>
         </ProductSelection>
        </div>
      </div>

      <div style={{display: isShown ? 'none' : 'block' }} >
        <p>hola</p>
      </div>

    </div>
  );
}
export default BreakfastOverview;
*/