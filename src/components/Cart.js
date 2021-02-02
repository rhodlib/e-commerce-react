import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "../database/firebase";
import firebase from "firebase/app";
import "@firebase/firestore";
import { CartContext } from "../context/CartContext";
import Styles from "./Cart.module.css";
import Loader from "./Loader";
import UserForm from "./UserForm";

const db = getFirestore();

const Cart = () => {
  const [orderId, setOrderId] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const myContext = useContext(CartContext);
  const orders = db.collection("orders");
  const newOrder = {
    buyer: userInfo,
    items: [...myContext.cart],
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: myContext.totalPrice(),
  };

  const onClickOrder = (event) => {
    event.preventDefault();
    if(userInfo.name !== "" && userInfo.email !== "" && userInfo.phone !== ""){
      setLoading(true);
      orders
        .add(newOrder)
        .then(({ id }) => {
          setOrderId(id);
  
          const collection = db.collection("items");
          
          myContext.cart.forEach(({item, quantity}) => {
              const batch = db.batch();
              let doc = collection.doc(item.id);
              doc.get().then(itm => {
                  batch.update(doc, {stock: itm.data().stock - quantity});
              }).then(() => batch.commit());
          })        
      }).catch((err) => {
          setError(err);
      }).finally(() => {
          setLoading(false)
          myContext.clear();
      });
    }
  };

  return loading ? (
    <Loader />
  ) : orderId ? (
    <p>Su order Id es : {orderId}</p>
  ) : myContext.cart.length ? (
    <>
    <ul className={Styles.cartContainer}>
      {myContext.cart.map(({ item, quantity }) => {
        return (
          <li className={Styles.cartItem} key={item.id}>
            <img className={Styles.img} src={item.image} />
            <p>
              {item.title} x {quantity}
            </p>
            <p>{item.price * quantity}</p>
            <button onClick={() => myContext.removeItem(item.id)}>
              Eliminar
            </button>
          </li>
        );
      })}
      <li> Total:{myContext.totalPrice()}</li>
    </ul>
    <UserForm onClick={onClickOrder} user={userInfo} setUser={setUserInfo}/>
    </>
  ) : (
    <p>
      No hay productos en el carrito <Link to="/">Ir a comprar</Link>
    </p>
  );
};

export default Cart;
