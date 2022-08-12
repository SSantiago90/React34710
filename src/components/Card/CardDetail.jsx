import Button from "../Button/Button";
import "./card.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function CardDetail({ id, title, price, img, category, stock }) {
  /* Guardemos en un estado la cantidad que vino del ItemCount */
  const estado = 1;

  function handleAdd(count) {
    console.log("Agregar al carrito", count);
    /* setState */
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

      { estado === 0?  
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={handleAdd}
          text={"Finalizar"}
        />
        : 
        <a href="/cart">Ir al carrito</a>
      }
    </div>
  );
}

export default CardDetail;
