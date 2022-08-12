import React, { useState, useEffect } from "react";
import data from "../../data/data";
import Card from "../Card/Card";

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

  return (
    <div className="main container mx-auto mt-5">
      {/* El mapa debería realizarse en el componente <ItemList>, al que le pasamos el estado "products" mediante props */}
      {products.map((item) => {
        return (
          <Card
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
