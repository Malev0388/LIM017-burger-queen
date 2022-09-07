import React, { useEffect, useState } from "react";
import {collection, getDocs, updateDoc,doc, where, query} from "firebase/firestore";
import { db } from "../../firebase/connection.js";
import "./style.css";
import Swal from 'sweetalert2'

export const Chef = () => {
  const [users, setTotal] = useState([]);
  const usersCollectionRef = collection(db, "ordenes");  

  const getUsers = async () => {
   const data = await getDocs(query(usersCollectionRef, where("state", "<", 2)));
    setTotal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));   
  };

  useEffect(() => {
    getUsers();
  }, []);
  
/* ------------ Funcion estados del boton ------------ */
const buttonState = async (user) => {
  console.log(user)
  const userState = doc(db, "ordenes", user.id);  

  switch(user.state){
    case 0 :
      try{
        await updateDoc(userState, {
          state: 1,
        })
        console.log("amarillo")
        getUsers();
      } catch (error) {
        console.log(error)
      }    
    break;
    case 1 :
      try{
        await updateDoc(userState, {
          state: 2,
          
        })
        getUsers();
      } catch (error) {
        console.log(error)
      }   
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Pedido enviado a mesero',
        showConfirmButton: false,
        timer: 1500
      }) 
    break;
  }
};
/* --------------------------------------- */
  return (
    <div>
      <header className="header">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/burger-queen-d0e74.appspot.com/o/logo-bq.PNG?alt=media&token=ff5fc092-8e35-45fc-ab81-6b4a4a7efa45"
          alt="logoBurgerQueen"
          className="logoBurgerQueen"
        />
      </header>
      <ul className="containerNavbarChef">
        <text className="stateOrdersTitle">ESTADO DE PEDIDOS</text>
        <div className="stateOrders">
          <text className="redBall">🔴 Pendiente</text>
          <text className="greenBall">🟠 En proceso</text>
        </div>
      </ul>

      <div className="containerOrders">
      {users.map((user, id) => {
        return (
            <div className={'containerOrderChef '+ (user.state ==0 ? 'containerOrderChef' :user.state ==1 ?'containerOrderChef-preparing': '')}
            key={id}>
              <div className={'numberTable '+ (user.state ==0 ? 'numberTable' :user.state ==1 ?'numberTable-preparing': '')}>
                Número de mesa: {user.numberClient}
              </div>

              <div className="listOrderChef">
                {user.productCar.map((product, id) => {
                  return (
                    <div className="productOrderChef" key={id}>
                      <h1 className="quantifyOrder">({product.quantity})</h1>
                      <h1 className="productOrder">{product.product}</h1>
                    </div>
                  );
                })}
              </div>

              <div className="listCommentChef">
                <h1 className="commentsTitleStyle">
                  COMENTARIO:<br></br>
                </h1>
                <div className="commentsTextStyle">{user.comentOrder}</div>
              </div>
              <button className={'buttonStyle '+ (user.state ==0 ? 'buttonStyle':user.state ==1 ?'buttonStyle-preparing': '')}
               onClick={ ()=> buttonState(user)}> 
              {user.state ? 'preparando':'pendiente'} 
              </button>
            </div> 
        );
      })}
      </div>
    </div>
  );
};
export default Chef;
