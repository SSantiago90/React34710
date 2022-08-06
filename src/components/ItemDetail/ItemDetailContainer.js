import React, { useEffect } from "react";
import dataJSON from "../../data/data";
import Card from "../Card/CardWithObject";

function ItemDetailContainer({ itemid }) {
  /* Crear un estado para guardar un objeto/item/producto */
  /* Crear un EFFECTO para cargar en el montaje  */

  function traerProducto() {
    return new Promise((resolve, reject) => {
      let itemEncontrado = dataJSON.find((element) => itemid === element.id);
      itemEncontrado
        ? resolve(itemEncontrado)
        : reject(new Error("Error en el find"));
    });
  }

  useEffect(() => {
    traerProducto()
      .then((respuesta) => console.log(respuesta))
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="main">
      {/* Crear componente ItemDetail y enviarle por props los datos del producto
       que guardamos en el estado (nombre, precio, imagen, etc.)          
      */}
    </div>
  );
}

export default ItemDetailContainer;
