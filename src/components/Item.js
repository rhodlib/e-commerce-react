import React from "react";
import styles from "./Item.module.css";

const Item = ({ id, title, price, pictureUrl }) => {
    return (
        <div className={styles.itemCard}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.price}><span>$</span>{price}</p>
            <img className={styles.picture} src={pictureUrl} alt={title}/>
        </div>
    )
}

export default Item;