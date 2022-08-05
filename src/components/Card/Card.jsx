import Button from "../Button/Button";
import "./card.css";

function Card({ title, price, img, category }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{title}</h2>
        <p>{category}</p>
        <h3>$ {price}</h3>
        <Button type text="Ver más"></Button>
      </div>
    </div>
  );
}

export default Card;
