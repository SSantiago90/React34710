import React, { useEffect, useState } from "react";
import dataJSON from "../../data/data";
import Card from "../Card/CardWithObject";
import { useParams } from "react-router-dom";

function ItemDetailContainer({ itemid }) {
  const [item, setItem] = useState({});

  const idURL = useParams().id;

  function traerProducto() {
    return new Promise((resolve, reject) => {
      let itemRequested = dataJSON.find((elemento) => elemento.id == idURL);

      if (itemRequested === undefined) reject("No encontramos el item");
      else resolve(itemRequested);
    });
  }

  useEffect(() => {
    traerProducto()
      .then((respuesta) => setItem(respuesta))
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="main">
      <div className="card">
        <div className="card-img">
          <img src={item.img} alt="imagen" />
        </div>
        <div className="card-detail">
          <h2>{item.title}</h2>
          <p>{item.category}</p>
          <h3>$ {item.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
