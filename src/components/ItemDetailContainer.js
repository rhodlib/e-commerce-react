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
  const [item, setItem] = useState({});

  useEffect(() => {
    getItem()
      .then((res) => setItem(res.find((item) => item.id === Number(itemId))))
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <div className={styles.container}>
        {Object.entries(item).length !== 0 ? <ItemDetail
          id={item.id}
          title={item.title}
          price={item.price}
          pictureUrl={item.pictureUrl}
          description={item.description}
          stock={item.stock}
        /> : <p>cargando...</p>
        }
    </div>
  );
};

export default ItemDetailContainer;
