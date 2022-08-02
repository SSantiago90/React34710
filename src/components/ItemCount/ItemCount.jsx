import React from "react";

function ItemCount(props) {
  console.log(props.stock, props.initial); /* Valor máximo del contador */

  const [clicks, setClicks] = ""; /* hook de estado */

  const handleIncrement = () => {
    /* Sumamos */
  };

  const handleDecrement = () => {
    /* Restamos */
  };

  const onAdd = () => {
    /*  */
  };

  return (
    <>
      <h3>Item Counter</h3>
      <button onClick={handleDecrement}>restar</button>
      <button onClick={handleIncrement}>sumar</button>
      <button onClick={onAdd}>Finalizar Compra</button>
    </>
  );
}

export default ItemCount;
