import React, { useState, useEffect } from "react";
import data from "../../data/data";
import Card from "../Card/Card";
import { Metronome } from "@uiball/loaders";

function traerProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1500);
  });
}

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    traerProductos()
      .then((respuesta) => {
        setProducts(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //console.log(products);

  if (products.length === 0) {
    return (
      <div className="main container mx-auto mt-5">
        <Metronome size={90} speed={1.6} color="lightblue" />
      </div>
    );
  }

  return (
    <div className="main container mx-auto mt-5">
      {products.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            img={item.img}
            stock={item.stock}
          />
        );
      })}
    </div>
  );
};

export default ItemListContainer;
