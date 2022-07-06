import { useCart } from "react-use-cart";
import { db } from "../../../firebase/connection.js";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";

/*----------------SELECCION DE PRODUCTOS------------*/
const ProductSelection = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [name, clientName] = useState([""]);
  const [table, tableNum] = useState([]);
  const [coment, setComent] = useState([""]);


  const insertOrder = (items, name, coment, table) => {
    addDoc(collection(db, "ordenes"), { name, table, coment, items });
    alert("Tu pedido ha sido enviado");
  };

  return (
    <>
      <div>
        <h1 className="text-center"> ORDEN </h1>
        <br />
        <input
          className="inputOrder"
          type="text"
          placeholder="Cliente"
          onChange={(event) => {
            clientName(event.target.value);
          }}
        />
        <input
          className="inputOrder"
          type="number"
          placeholder="Mesa"
          onChange={(event) => {
            tableNum(event.target.value);
          }}
        />
      </div>
      <section className="container2">
        <div className="row justify-content-center">
          <div>
            {items.map((item, id) => {
              return (
                <div key={id}>
                  <div className="container-product-selection">
                    <div> {item.product} </div>
                    <div className="buttons-options-products">
                      <button
                        className="btn-reduce-product"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        {" "}
                        -{" "}
                      </button>
                      <div className="quantity-product"> {item.quantity} </div>
                      <button
                        className="btn-add-product"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                    <img
                      className="image-remove-all"
                      src="https://firebasestorage.googleapis.com/v0/b/burger-queen-d0e74.appspot.com/o/tacho-de-basura.png?alt=media&token=4cd950bd-0db1-4e95-84c5-3d91ede0a46f"
                      alt="img-tacho"
                      onClick={() => removeItem(item.id)}
                    ></img>
                  </div>
                </div>
              );
            })}
          </div>

          <colum className="totalPriceStyle">
            <h3 className="totalPrice">Total: </h3>
            <h3 className="priceStyle"> S/. {cartTotal} </h3>
          </colum>
          <div className="commentsSentStyle">
            <textarea
              className="commentsStyle"
              placeholder="Escribe aquí un comentario"
              onChange={(event) => {
                setComent(event.target.value);
              }}>
              {" "}
            </textarea>
          </div>

          <div>
            <h3>total:{cartTotal} </h3>
            <button
              className="sentButton"
              onClick={() => insertOrder(name, table, coment, items)}
            >
              Enviar
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductSelection;