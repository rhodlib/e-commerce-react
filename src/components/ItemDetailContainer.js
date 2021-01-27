import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from '../database/firebase';
import ItemDetail from "./ItemDetail";
import Loader from './Loader';
import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const itemCollection = db.collection("items");
    const itemFb = itemCollection.doc(itemId)

    itemFb.get().then( doc => {
      if(!doc.exists) {
        console.log('Item does not exist!')
        return;
      }
      console.log('Item found!');
      setItem({id: doc.id, ...doc.data()})
    }).catch((error) => {
      console.log("Error searching items", error)
    }).finally(() => {
      setLoading(false);
    })

  }, [itemId]);

  return (
    <div className={styles.container}>
        {loading ? <Loader/> : <ItemDetail
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          description={item.description}
          stock={item.stock}
        />
        }
    </div>
  );
};

export default ItemDetailContainer;
