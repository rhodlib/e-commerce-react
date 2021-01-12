import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import itemsJSON from "./items.json";
import styles from "./ItemDetailContainer.module.css";

//Item Mock
const getItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(itemsJSON);
    }, 2000);
  });
};

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  console.log(itemId);
  const [item, setItem] = useState({});

  useEffect(() => {
    getItem()
      .then((res) => setItem(res.find((item) => item.id === Number(itemId))))
      .catch((err) => console.log(err));
  }, [itemId]);

  console.log(item)
  return (
    <div className={styles.container}>
      {item.pictureUrl === undefined ? (
        <p>Cargando..</p>
      ) : (
        <ItemDetail
          id={item.id}
          title={item.title}
          price={item.price}
          pictureUrl={item.pictureUrl}
          description={item.description}
          stock={item.stock}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
