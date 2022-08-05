import React, { useEffect } from "react";
import data from "../../data/data";
/* Crear una promesa que RESUELVA un producto del array de datos */

function traerProducto() {
  return new Promise( 
    (resolve, reject) =>  {
      /* Promesa que luego de 1 segundo (setTimeout) devuelve (resolve) un item del listado (es decir de nuestro array "data") */
    }    
  )  
}

function ItemDetailContainer() {
  /* Crear un estado para guardar un objeto/item/producto */
  /* Crear un EFFECTO para cargar en el montaje  */
  useEffect(() => {
    traerProducto(); /* .then() -> setState */
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
