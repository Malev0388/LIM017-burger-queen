import React, { useEffect, useState } from "react";
import {collection, getDocs,} from "firebase/firestore";
import { db } from "../../firebase/connection.js";
import "./style.css";

export const Chef = () => {
  const [users, setTotal] = useState([]);
  const usersCollectionRef = collection(db, "ordenes");
  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
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
        <text className="stateOrdersTitle">ESTADO DE PEDIDOS</text>
        <div className="stateOrders">
          <text className="redBall">🔴 Pendiente</text>
          <text className="greenBall">🟢 En proceso</text>
        </div>
      </ul>

      <div className="containerOrders">
      {users.map((user, id) => {

        return (
            <div className="containerOrderChef" key={id}>
              <div className="numberTable">
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

              <button className="buttonEarring">Pendiente</button>
            </div> 
        );
      })}
      </div>
    </div>
  );
};

export default Chef;
