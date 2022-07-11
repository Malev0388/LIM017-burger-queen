import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/connection.js";


export const Chef = () => {    

    const [users, setTotal] = useState([]);

    const usersCollectionRef = collection(db,"ordenes"); 
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setTotal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
   /* const usersCollectionRef = collection(db,"ordenes"); 
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setTotal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };*/
  
    useEffect(() => {
      getUsers();
    }, []);
    
    return (
      <div>
       {users.map((user, id) =>{
        return(
            <div key={id}>
                <h1>nombre: {user.nameClient} </h1>
                <h1>mesa: {user.numberClient} </h1>
                <h1>comentario: {user.comentOrder} </h1>
                <br/>
            </div>
        )
       } )}
      </div>
    );
  };
  
  export default Chef;

  /*
      return (
      <div>
       {users.map((user, id) =>{
        return(
            <div key={id}>
                <h1>nombre: {user.nameClient} </h1>
                <h1>mesa: {user.numberClient} </h1>
                <h1>comentario: {user.comentOrder} </h1>
                <br/>
            </div>
        )
       } )}
      </div>
    );
  */