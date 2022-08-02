import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ButtonChildren from "../Button/ButtonChildren";

function Ejemplos() {
  return (
    <>
      <div className="header-banner">
        <img
          className="header-img"
          src="/images/coderhouse.jpg"
          alt="Coderhouse"
        />
      </div>
      <h1 className="title">Coderhouse React 34710 ⚛</h1>
      <br />
      <Button text="Click me" />
      <ButtonChildren type="alert">Click me with Childrens</ButtonChildren>
      <div className="main">
        <Card
          name="Televisor HD"
          price={2090}
          imgurl="https://picsum.photos/280/260"
          description="Lorem Ipsum"
        />
      </div>
    </>
  );
}

export default Ejemplos;
