import React, { useEffect, useState } from "react";
import "./styleOrders.css";
import { collection, getDocs, query, where,doc,updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/connection.js";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

/*---------------- VISTA PEDIDOS LISTOS ----------------*/
export const OrdersReady = () =>{

  const [cookedOrders, setTotal] = useState([]);
  const ordersCollections = collection(db, "ordenes");  

  const deliverOrders = async () => {
    const orders = await getDocs(query(ordersCollections, where("state" ,">=",2),where("state" ,"<",3)))
    setTotal(orders.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    deliverOrders();
  }, []);

  /* ------------ Funcion estados del boton ------------ */
const buttonStates = async (orderReady) => {
    console.log(orderReady)  
   const userState = doc(db, "ordenes", orderReady.id); 

    switch(orderReady.state){
      case 2 :
        try{
          await updateDoc(userState, {
            state:3
          })
          console.log("red")
          deliverOrders();
        } catch (error) {
          console.log(error)
        }      
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Pedido entregado a mesa',
          showConfirmButton: false,
          timer: 1500
        })  
     break;
    }
  };

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
        {cookedOrders.map((orderReady, id) => {
            return (
            <div className={'containerOrdersReady '+ (orderReady.state ==0 ? 'containerOrdersReady':orderReady.state ==3 ?'': '')}
            key={id}>
              <div className={'numberTableOrders '+ (orderReady.state ==0 ? 'numberTableOrders':orderReady.state ==3 ?'': '')}>
                Cliente: {orderReady.nameClient} 
                <br/>
                Numero de mesa: {orderReady.numberClient}
              </div>

              <div className="listOrdersReady">
                {orderReady.productCar.map((product, id) => {
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
                <div className="commentsTextStyleOrders">{orderReady.comentOrder}</div>
              </div>
              <button className={'buttonStyleOrders '+ (orderReady.state ==0 ? 'buttonStyleOrders':orderReady.state ==3?'': '')}
               onClick={ ()=> buttonStates(orderReady)}> 
              {orderReady.state ? 'entregar':'pendiente'} 
              </button>
            </div> 
        );
      })}
      </div>

    </div>
  );
};
export default OrdersReady;

