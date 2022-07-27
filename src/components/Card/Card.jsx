import Button from "../Button/Button";
import "./card.css";

function Card({ name, price, imgurl, description }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={imgurl} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>$ {price}</h3>
        <Button type text="Ver más"></Button>
      </div>
    </div>
  );
}

export default Card;
