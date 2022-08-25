import { useState } from "react";
import "./card.css";
import ItemCount from "../ItemCount/ItemCount";

import { useContext } from "react";
import { cartContext } from "../../store/cartContext";
import { Link } from "react-router-dom";

function CardDetail({ id, title, price, img, category, stock }) {
  const { addToCart } = useContext(cartContext);
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [feedbackMsg, setFeedbackMsg] = useState(false);

  function handleAdd(count) {
    const itemToCart = { id, title, price, img, category, stock };
    addToCart(itemToCart, count);
    setFeedbackMsg("Producto agregado al carrito: " + count + " unidades");
    setQuantityInCart(count);
  }

  return (
    <div className="card">
      <small>{feedbackMsg && <p>{feedbackMsg}</p>}</small>

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
          value={quantityInCart}
        />
      ) : (
        <Link to="/cart">Ir al carrito</Link>
      )}
    </div>
  );
}

export default CardDetail;
