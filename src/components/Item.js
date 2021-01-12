import React from "react";
import styles from "./Item.module.css";
import {Link} from 'react-router-dom';

const Item = ({ id, title, price, pictureUrl }) => {
    return (
        <Link to={`/item/${id}`} className={styles.itemCard}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.price}><span>$</span>{price}</p>
            <img className={styles.picture} src={pictureUrl} alt={title}/>
        </Link>
    )
}

export default Item;