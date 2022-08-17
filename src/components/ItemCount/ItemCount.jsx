import React, { useState } from "react";

function ItemCount(props) {
  const [count, setCount] = useState(props.initial);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h3>Item Counter</h3>
      <button onClick={handleDecrement}>restar</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>sumar</button>
      <button onClick={()=>props.onAdd(count)}>Finalizar Compra</button>
    </>
  );
}

export default ItemCount;
