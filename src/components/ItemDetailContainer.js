import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getFirestore } from "../database/firebase";
import ItemDetail from "./ItemDetail";
import Loader from "./Spinner";

const ItemDetailContainer = () => {
  const history = useHistory();
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const itemCollection = db.collection("items");
    const itemFb = itemCollection.doc(itemId);

    itemFb
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Item does not exist!");
          history.push("/404");
          return;
        }
        console.log("Item found!");
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [itemId, history]);

  return loading ? (
    <Loader />
  ) : (
    <ItemDetail
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
      description={item.description}
      stock={item.stock}
    />
  );
};

export default ItemDetailContainer;
