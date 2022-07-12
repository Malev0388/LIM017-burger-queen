import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where, getFirestore,doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/connection.js";
import "./style.css";


export const Chef = () => {

  /*const [users, setTotal] = useState([]);
  const usersCollectionRef = collection(db, "ordenes");
  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setTotal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
 // console.log(users);

  useEffect(() => {
    getUsers()
  }, []);

  return (
    <div>
      <header className="header">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/burger-queen-d0e74.appspot.com/o/logo-bq.PNG?alt=media&token=ff5fc092-8e35-45fc-ab81-6b4a4a7efa45"
            alt="logo-bq"
            className="logo-bq"
          />
      </header>
      <ul >
        <text className = "stateOrdersTittle">ESTADO DE PEDIDOS</text>
          <div className="stateOrders">
            <text className = "redBall">🔴 En proceso</text>
            <text className = "greenBall">🟢 Pediente</text>
          </div>
      </ul>

      {users.map((user, id) => {
        // console.log("hola",user);
        return (           

          <div key={id}>
            <h1>nombre: {user.nameClient} </h1>
            <h1>mesa: {user.numberClient} </h1>
            <h1>comentario: {user.comentOrder} </h1>
            <div>
              {user.productCar.map ((product, id) => {
                return (
                  <div key={id}>
                    <h1>Producto:{product.product}</h1>
                    <h1>cantidad:{product.quantity}</h1>
                  </div>
                )
              })}     
            </div>
            <br />
          </div>
          //
        );
      })}
     
    </div>
  );
};*/
}

export default Chef;

/*
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where, getFirestore } from "firebase/firestore";
import { db } from "../../firebase/connection.js";

export const Chef = () => {
  const [users, setTotal] = useState([]);
  const usersCollectionRef = collection(db, "ordenes");
  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setTotal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
 // console.log(users);

  useEffect(() => {
    getUsers()
  }, []);

  return (
    <div>
      {users.map((user, id) => {
         console.log("hola",user.productar);
        return (
          <div key={id}>
            
            <h1>nombre: {user.nameClient} </h1>
            <h1>mesa: {user.numberClient} </h1>
            <h1>comentario: {user.comentOrder} </h1>
            <br />
          </div>
        );
      })}
     
    </div>
  );
};

export default Chef;


*/