import React from 'react';
import styles from './ItemListContainer.module.css';

const ItemListContainer = ({greeting}) => {
    return <p className={styles.container}>{greeting}</p>
}

export default ItemListContainer;