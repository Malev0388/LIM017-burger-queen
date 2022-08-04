import React, { useEffect, useState } from "react";
import "./styleOrders.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/connection.js";
//import BreakfastProduct from "../Breakfast/BreakfastProduct.js";
//import ProductSelection from "../Breakfast/ProductSelection.js";
import { Link } from "react-router-dom";

/*---------------- VISTA PEDIDOS LISTOS ----------------*/
export const OrdersReady = () =>{

  const [cookedOrders, setTotal] = useState([]);
  const deliverOrders = async () => {
    const orders = await getDocs(query(collection(db,'ordenes'), where("state", "==", 2)))
    setTotal(orders.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    deliverOrders();
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

       <div className="containerOrders">
        {cookedOrders.map((user, id) => {
            return (
            <div className="containerOrdersReady" key={id}>
            
              <div className="numberTableOrders">
                Número de mesa: {user.numberClient}
              </div>

              <div className="listOrdersReady">
                {user.productCar.map((product, id) => {
                  return (
                    <div className="productOrdersReady" key={id}>
                      <h1 className="quantifyOrders">({product.quantity})</h1>
                      <h1 className="productOrders">{product.product}</h1>
                    </div>
                  );
                })}
              </div>

              <div className="listCommentOrdersReady">
                <h1 className="commentsTitleStyleOrders">
                  COMENTARIO:<br></br>
                </h1>
                <div className="commentsTextStyleOrders">{user.comentOrder}</div>
              </div>
              <button className="buttonStyleOrders" > 
              {user.state ? 'preparando':'pendiente'} 
              </button>
            </div> 
        );
      })}
      </div>

    </div>
  );
};
export default OrdersReady;

