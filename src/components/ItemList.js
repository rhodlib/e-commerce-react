import React from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <div className={styles.itemList}>
      {items.map((item) => item.stock > 0 && <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
      )}
    </div>
  );
};

export default ItemList;
