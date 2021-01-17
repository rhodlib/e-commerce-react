import React from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <div className={styles.itemList}>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          pictureUrl={item.pictureUrl}
        />
      ))}
    </div>
  );
};

export default ItemList;
