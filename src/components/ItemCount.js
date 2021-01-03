import React, { useState } from "react";
import styles from "./ItemCount.module.css";

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(initial);

    const increment = () => {
        if(counter < stock){
            setCounter(counter + 1);
        }
    }

    const decrement = () => {
        if(counter > initial){
            setCounter(counter - 1);
        }
    }

    return (
        <div className={styles.itemCount}>
            <div className={styles.counterController}>
                <button className={styles.controlButton} onClick={decrement}>-</button>
                <span className={styles.counter}>{counter}</span>
                <button className={styles.controlButton} onClick={increment}>+</button>
            </div>
            <button className={styles.onAddButton} onClick={stock ? ()=> onAdd(counter): null}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;