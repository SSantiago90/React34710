import "./card.css";
import ItemCount from "../ItemCount/ItemCount";

import { useContext } from "react";
import { cartContext } from "../../store/cartContext";

function CardDetail({ id, title, price, img, category, stock }) {
  const { addToCart } = useContext(cartContext);
  /* remplazar "quantityInCart" por un estado para hacer dinamico el renderizado condicional del itemcount */
  const quantityInCart = 0;

  function handleAdd(count) {
    const itemToCart = { id, title, price, img, category, stock };
    addToCart(itemToCart, count);
    /* setQuantity(count) */
  }

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{title}</h2>
        <p>{category}</p>
        <h3>$ {price}</h3>
      </div>

      {quantityInCart === 0 ? (
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={handleAdd}
          text={"Finalizar"}
        />
      ) : (
        <a href="/cart">Ir al carrito</a>
      )}
    </div>
  );
}

export default CardDetail;
