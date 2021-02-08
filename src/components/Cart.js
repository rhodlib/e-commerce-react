import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "../database/firebase";
import firebase from "firebase/app";
import "@firebase/firestore";
import { CartContext } from "../context/CartContext";
import Loader from "./Spinner";
import { Button, Grid, Header, Item, Label } from "semantic-ui-react";
import FormModal from "./FormModal";
const db = getFirestore();

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const myContext = useContext(CartContext);
  const orders = db.collection("orders");

  const onClickOrder = (values) => {
    const newOrder = {
      buyer: values,
      items: [...myContext.cart],
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: myContext.totalPrice(),
    };
    setLoading(true);
    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);

        const collection = db.collection("items");

        myContext.cart.forEach(({ item, quantity }) => {
          const batch = db.batch();
          let doc = collection.doc(item.id);
          doc
            .get()
            .then((itm) => {
              batch.update(doc, { stock: itm.data().stock - quantity });
            })
            .then(() => batch.commit());
        });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
        myContext.clear();
      });
  };

  return loading ? (
    <Loader />
  ) : orderId ? (
    <>
      <Header size="huge" textAlign="center">
        Su order Id es : {orderId}
      </Header>
      <Link to="/">Volver al inicio</Link>
    </>
  ) : myContext.cart.length ? (
    <Grid>
      <Grid.Row centered>
        <Item.Group divided className="itemCart">
          {myContext.cart.map(({ item, quantity }) => {
            return (
              <Item key={item.id} className="itemCart">
                <Item.Image size="small" src={item.image} />
                <Item.Meta textAlign="left">
                  {item.title} x {quantity}
                </Item.Meta>
                <Button
                  onClick={() => myContext.removeItem(item.id)}
                  color="red"
                  inverted
                >
                  Eliminar
                </Button>
              </Item>
            );
          })}
        </Item.Group>
      </Grid.Row>
      <Grid.Row centered>
        <Label color="red" size="huge">
          Total: $ {myContext.totalPrice()}
        </Label>
        <FormModal open={open} setOpen={setOpen} onClickOrder={onClickOrder} />
      </Grid.Row>
    </Grid>
  ) : (
    <Header size="huge" textAlign="center">
      No hay productos en el carrito <Link to="/">Ir a comprar</Link>
    </Header>
  );
};

export default Cart;
