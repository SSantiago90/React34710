import React, { useEffect, useState } from "react";
import dataJSON from "../../data/data";
import CardDetail from "../Card/CardDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer({ itemid }) {
  const [item, setItem] = useState();

  const { id } = useParams();

  function traerProducto() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let itemRequested = dataJSON.find(
          (elemento) => elemento.id === Number(id)
        );

        if (itemRequested === undefined) reject("No encontramos el item");
        else resolve(itemRequested);
      }, 1000);
    });
  }

  useEffect(() => {
    traerProducto()
      .then((respuesta) => setItem(respuesta))
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="main">
      { item
        ?  <CardDetail
        id={item.id}
        title={item.title}
        price={item.price}
        img={item.img}
        category={item.category}
        stock={item.stock}
      />
        :  <h1>Cargando</h1>
     
    }
    </div>
  );
}

export default ItemDetailContainer;
