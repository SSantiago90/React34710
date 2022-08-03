import Button from "../Button/Button";
import "./card.css";

function Card(props) {
  console.log(props.data);

  return (
    <div className="card">
      <div className="card-img">
        <img src={props.data.imgurl} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{props.data.name}</h2>
        <p>{props.data.description}</p>
        <h3>$ {props.data.price}</h3>
        <Button text="Ver más" />
      </div>
    </div>
  );
}

export default Card;
