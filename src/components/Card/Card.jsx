import Button from "../Button/Button";
import "./card.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function Card({ id, title, price, img, category, stock }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{title}</h2>
        <p>{category}</p>
        <h3>$ {price}</h3>
        {/* Crear un LINK para navegar al detalle del producto */}

        <Link to={`/detalle/${id}`}>
          <Button
            /* onTouch={() => alert(`Clickeado el item: ${title}`)} */
            text="Ver más"
          ></Button>
        </Link>       
        
      </div>
    </div>
  );
}

export default Card;
