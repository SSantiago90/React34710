import React from "react";
import Button from "../Button/Button";

function CartItem({ title, img, price, quantity, total, removeItem }) {
  return (
    <tr>
      <td>
        <img height={50} src={img} alt={title} />
      </td>
      <td>{title}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td>
        <Button type="alert" onTouch={removeItem}>
          X
        </Button>
      </td>
      <th>$ {total}</th>
    </tr>
  );
}

export default CartItem;
