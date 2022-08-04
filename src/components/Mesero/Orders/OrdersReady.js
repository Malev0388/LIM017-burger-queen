import React, { useEffect, useState } from "react";
import "../style.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/connection.js";
import BreakfastProduct from "../Breakfast/BreakfastProduct.js";
import ProductSelection from "../Breakfast/ProductSelection.js";
import { Link } from "react-router-dom";

/*---------------- VISTA GENERAL ALMUERZO ----------------*/
export const OrdersReady = () =>{

  const [productTotal, setTotal] = useState([]);
  const getLunch = async () => {
    const productLunch = await getDocs(query(collection(db,'menu'), where("type", "==", "lunch")))
    setTotal(productLunch.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getLunch();
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
      <h1>hola</h1>

    </div>
  );
};
export default OrdersReady;

