import React, { useEffect, useState } from "react";
import itemsData from "../../data/data.js";
import Card from "../Card/Card.jsx";

function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 1000);
  });
}

export default function ItemListContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductos().then((respuesta) => {
      setData(respuesta);
    });
  }, []);

  return (
    <div>
      <h1>Item List</h1>
      {/* ItemList  */}
      {/* MAPEAR EL STATE */}
      {data.map((singleMovie) => {
        return (
          <Card
            key={singleMovie.title + singleMovie.category}
            title={singleMovie.title}
            category={singleMovie.category}
            img={singleMovie.img}
            price={singleMovie.price}
          />
        );
      })}
    </div>
  );
}
