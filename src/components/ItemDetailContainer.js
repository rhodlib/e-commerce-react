import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

//Item Mock
const getItem = () => {
  const response = {
    id: 1,
    title: "Detergente",
    price: 400,
    pictureUrl:
      "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2790506_1_f.jpg",
    description:
      "Ala Plus Detergente Cremoso con Glicerina, es un detergente para lavavajillas que contiene agentes de limpieza que te ayudan en el lavado de la vajilla de cocina diaria, removiendo la grasa difícil y la suciedad, y logrando un resultado brillante y un desengrase total de todos tus platos y de toda tu vajilla.",
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response);
    }, 2000);
  });
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    getItem()
      .then((res) => setItem(res))
      .catch((err) => console.log(err));
  }, []);

  return (
          <ItemDetail
            id={item.id}
            title={item.title}
            price={item.price}
            pictureUrl={item.pictureUrl}
            description={item.description}
          />
  );
};

export default ItemDetailContainer;
