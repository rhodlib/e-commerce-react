import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ItemListContainer.module.css";
import itemsJSON from "./items.json";
import ItemList from "./ItemList";

//Async Mock
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(itemsJSON);
  }, 2000);
});

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    promise
      .then((response) => setItems(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <p className={styles.container}>{greeting}</p>
      {items.length === 0 ? (
        <p className={styles.loading}>Cargando Lista</p>
      ) : (
        <ItemList
          items={
            categoryId === undefined
              ? items
              : items.filter((item) => item.category === Number(categoryId))
          }
        />
      )}
    </>
  );
};

export default ItemListContainer;
