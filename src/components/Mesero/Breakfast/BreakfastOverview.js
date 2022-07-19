import React, { useEffect, useState } from "react";
import "../style.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/connection.js";
import BreakfastProduct from "./BreakfastProduct.js";
import ProductSelection from "./ProductSelection.js";
import { Link } from "react-router-dom";

/*----------------VISTA GENERAL DESAYUNO (productos para elegir)------------*/
 const BreakfastOverview = () => {
  const [productTotal, setTotal] = useState([]);
  const getBreakFast = async () => {
    const product = await getDocs(
      query(collection(db, "menu"), where("type", "==", "breakfast"))
    );
    setTotal(product.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getBreakFast();
  }, []);
  
  return (
    <div>
      <div>
        <header className="header">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/burger-queen-d0e74.appspot.com/o/logo-bq.PNG?alt=media&token=ff5fc092-8e35-45fc-ab81-6b4a4a7efa45"
            alt="logoBurgerQueen"
            className="logoBurgerQueen"
          />
        </header>

        <ul>
          <li>
            <Link className="buttonBreakfast" to="/mesero">DESAYUNO</Link>
          </li>
          <li>
            <Link className="buttonMenu" to="/menu">MENÚ</Link> 
          </li>
          <li>
            <Link className="buttonOrders" to="/pedidos">PEDIDOS LISTOS</Link>
          </li>
        </ul>
      </div>

      <div className="containerWaiter">
        <div className="subContainerList">
          {productTotal.map((item) => {
            return (
              <BreakfastProduct
                image={item.image}
                product={item.product}
                price={item.price}
                key={item.id}
                item={item}
              ></BreakfastProduct>
            );
          })}
        </div>

        <div className="containerOrder">
          <div className="subContainerOrder">
            <ProductSelection></ProductSelection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakfastOverview;

