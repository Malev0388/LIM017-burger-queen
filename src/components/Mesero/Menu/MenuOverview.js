import React, { useEffect, useState } from "react";
import "../style.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/connection.js";
import MenuProduct from "./MenuProducts.js";
import ProductSelection from "./ProductSelection.js";
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart';

/*----------------VISTA GENERAL DESAYUNO------------*/
export const MenuOverview = () => {
  const [total, setTotal] = useState([]);
  const getBreakFast = async () => {
    const product = await getDocs(
      query(collection(db, "menu"), where("type", "==", "lunch"))
    );
    setTotal(product.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getBreakFast();
  }, []);
  const MenuProduct= (props) => {
    const { addItem } = useCart();

  return (
    
    <div>
      <div className='container-menu' >
      <div className='item-product' onClick={() => addItem(props.item)} key={props.id}>
        <img src={props.image} className='img-menu' alt="img-menu"/>

        <div className="container-text-menu">
          <p className='name-product'>{props.product} </p>
          <p className='precio'>precio:s/.{props.price} </p>    
        </div>  
          </div>
      </div>
      <div className="mesero">
        <header className="header">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/burger-queen-d0e74.appspot.com/o/logo-bq.PNG?alt=media&token=ff5fc092-8e35-45fc-ab81-6b4a4a7efa45"
            alt="logo-bq"
            className="logo-bq"
          />
        </header>

        <ul>
          <li>
            <Link className="button-desayuno" to="/mesero">
              DESAYUNO
            </Link>
          </li>
          <li>
            <Link className="button-menu" to="/menu">
              MENÚ
            </Link>
          </li>
          <li>
            <Link className="button-pedidos" to="/pedidos">
              PEDIDOS LISTOS
            </Link>
          </li>
        </ul>
      </div>
      <div className="container-mesero">
        <div className="">
          {total.map((item) => {
            return (
              <MenuProduct
                image={item.image}
                product={item.product}
                price={item.price}
                key={item.id}
                item={item}
              ></MenuProduct>
            );
          })}
        </div>

        <div className="car" id="page2">
          <ProductSelection></ProductSelection>
        </div>
      </div>
    </div>
  );
};

export default MenuOverview;





