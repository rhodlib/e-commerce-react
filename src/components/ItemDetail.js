import React, {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import styles from "./ItemDetail.module.css";
import ItemCount from './ItemCount';
import {CartContext} from "../context/CartContext";

const ItemDetail = ({ id, title, price, pictureUrl, description, stock }) => {
    const [cant, setCant] = useState(0);

    const myContext = useContext(CartContext);

    const onAdd = (counter) => {
        setCant(counter);
        myContext.addItem({item: {id, title, price, pictureUrl}, quantity: counter})
    }

    const renderButtons = (cant) => {
        return cant === 0 ? <ItemCount stock={stock} initial={1} onAdd={onAdd} /> : <Link to={`/cart`}><button className={styles.toCartButton}>Terminar mi compra</button></Link>
    }

    return(
        <div className={styles.itemDetail}>
            <img className={styles.image} src={pictureUrl} alt={title}/>
            <div className={styles.productDetail}>
                <h2 className={styles.title}>{title}</h2>
                <p>{price}</p>
                <p>{description}</p>
                {renderButtons(cant)}
            </div>
        </div>
    )
}

export default ItemDetail;