import React, { useEffect, useState } from "react";
import {collection, getDocs, updateDoc,doc, where, query} from "firebase/firestore";
import { db } from "../../firebase/connection.js";
import "./style.css";

export const Index = () => {
  const [users, setTotal] = useState([]);
  const usersCollectionRef = collection(db, "ordenes");  

  const getUsers = async () => {
   const data = await getDocs(query(usersCollectionRef, where("state", "==", 3)));
    setTotal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));   
  };

  useEffect(() => {
    getUsers();
  }, []);
  

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
        <text className="stateOrdersTitle">PEDIDOS ENTREGADOS A MESA CORRECTAMENTE</text>
      </ul>

      <div className="containerOrders">
      {users.map((user, id) => {
        return (
            <div className="containerOrderAdmin" key={id}>
              <div className="numberTableAdmin">
                Cliente: {user.nameClient} 
                <br/>
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
              <div className="listCommentAdmin">
                <h1 className="commentsTitleStyleAdmin">
                  COMENTARIO:<br></br>
                </h1>
                <div className="commentsTextStyleAdmin">{user.comentOrder}</div>
              </div>
            </div> 
        );
      })}
      </div>
    </div>
  );
};
export default Index;
