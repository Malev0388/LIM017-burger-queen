import React, { useEffect, useState } from "react";
import "./style.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/connection.js";
import BreakfastProduct from "./BreakfastProduct.js";
import ProductSelection from "./ProductSelection.js";


/*----------------VISTA GENERAL DESAYUNO------------*/
export const MenuOverview = () =>{

  const [total, setTotal] = useState([]);
  const getLunch = async () => {
    const productLunch = await getDocs(query(collection(db,'menu'), where("type", "==", "lunch")))
    setTotal(productLunch.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getLunch();
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

        <div className="car">
         <ProductSelection></ProductSelection>
        </div>
      </div>
  );
}
export default MenuOverview;
