import React from 'react';
import styles from "./ItemDetail.module.css";
import ItemCount from './ItemCount';

const ItemDetail = ({ id, title, price, pictureUrl, description, stock }) => {
    return(
        <div className={styles.itemDetail}>
            <img className={styles.image} src={pictureUrl} alt={title}/>
            <div className={styles.productDetail}>
                <h2 className={styles.title}>{title}</h2>
                <p>{price}</p>
                <p>{description}</p>
                <ItemCount stock={stock} initial={1} onAdd={console.log} />
            </div>
        </div>
    )
}

export default ItemDetail;