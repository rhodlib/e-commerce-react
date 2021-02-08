import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../database/firebase";
import ItemList from "./ItemList";
import Loader from "./Spinner";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    let itemCollection = db.collection("items");
    if(categoryId){
      itemCollection = itemCollection.where('categoryId', '==', Number(categoryId));
    }

    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        setItems(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
      })
      .catch((error) => console.log("Error searching items", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ItemList
          items={items}
        />
      )}
    </>
  );
};

export default ItemListContainer;
