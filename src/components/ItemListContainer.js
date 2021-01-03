import React from 'react';
import styles from './ItemListContainer.module.css';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <p className={styles.container}>{greeting}</p>
            <ItemCount stock={5} initial={1} onAdd={console.log}/>
        </>    
    )
}

export default ItemListContainer;