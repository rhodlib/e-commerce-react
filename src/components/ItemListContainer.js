import React, { useState, useEffect } from "react";
import styles from "./ItemListContainer.module.css";
import itemsJSON from "./items.json";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

//Async Mock
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(itemsJSON);
  }, 2000);
});

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    promise
      .then((response) => setItems(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <p className={styles.container}>{greeting}</p>
      <ItemList items={items}/>
    </>
  );
};

export default ItemListContainer;
