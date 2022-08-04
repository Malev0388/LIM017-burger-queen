import { useCart } from "react-use-cart";
import { db } from "../../../firebase/connection.js";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2'

/*----------------SELECCION DE PRODUCTOS (se muestran en el carrito)------------*/
const ProductSelection = () => {
  const {
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const usersCollectionRef = collection(db, "ordenes");
  const [name, setClientName] = useState([""]);
  const [table, setTableNum] = useState([""]);
  const [coment, setComent] = useState([""]);

  const insertOrder = () => {
    addDoc(usersCollectionRef,{
      //state:son los estados del producto que enpieza en 0
      nameClient:name, numberClient:table, comentOrder:coment, productCar:items, state:0 })
      setClientName("");
      setTableNum("");
      setComent("");

      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Pedido enviado',
        showConfirmButton: false,
        timer: 1500
      }) 
  };
 
  return (
    <div>
      <div>
        <h1 className="textCenter"> ORDEN </h1>
        <div>
          <input
            className="inputOrder"
            type="text"
            placeholder="CLIENTE"
            value={name}
            onChange={(event) => {
              setClientName(event.target.value);
            }}
          />
          <input
            className="inputOrder"
            type="number"
            placeholder="MESA"
            value={table}
            onChange={(event) => {
              setTableNum(event.target.value);
            }}
          />
        </div>
      </div>

      <section className="containerCartOrder">
        <div>
          <div className="goupProductSelection">
            {items.map((item, id) => {
              return (
                <div  key={id}>
                  <div className="containerProductSelection">
                    <div> {item.product} </div>
                    <div className="buttonsOptionsProducts">
                      <button className="buttonsReduceProduct"
                        onClick={() =>
                         updateItemQuantity(item.id, item.quantity - 1)} > - </button>
                      <div className="quantityProduct"> {item.quantity} </div>

                      <button className="buttonsAddProduct"
                        onClick={() =>
                         updateItemQuantity(item.id, item.quantity + 1)}> + </button>
                    </div>
                    <img
                      className="imageRemoveAll"
                      src="https://firebasestorage.googleapis.com/v0/b/burger-queen-d0e74.appspot.com/o/tacho-de-basura.png?alt=media&token=4cd950bd-0db1-4e95-84c5-3d91ede0a46f"
                      alt="img-tacho"
                      onClick={() => removeItem(item.id)}
                    ></img>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="totalPriceStyle">
            <h3 className="totalPrice">Total: </h3>
            <h3 className="priceStyle"> S/. {cartTotal} </h3>
          </div>
          <div>
            <textarea
              className="commentsStyle"
              placeholder="Escribe aquí un comentario"
              value={coment}
              onChange={(event) => {
                setComent(event.target.value);
              }}
            ></textarea>
          </div>

          <div>
            <button
              className="sendButton"
              onClick={() => insertOrder(name, table, coment, items,emptyCart())  
              }>ENVIAR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductSelection;
