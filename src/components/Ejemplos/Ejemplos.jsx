import React from "react";
import Card from "../Card/Card";
import CardWithObject from "../Card/CardWithObject";
import Button from "../Button/Button";
import ButtonChildren from "../Button/ButtonChildren";

function Ejemplos() {
  let userColor = "green";
  const styles = { marginTop: "20px", color: userColor };
  let usuario = "Santiago";

  const dataProducts = [
    {
      name: 'Televisor 52"',
      price: 2090,
      imgurl:
        "https://images.samsung.com/is/image/samsung/latin-uhd-tu7000-un50tu7000pxpa-rperspectivetitangray-228856620?$720_576_PNG$",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,   quidem.",
    },
    {
      name: 'Monitor 22"',
      price: 890,
      imgurl:
        "https://www.lg.com/ar/images/monitores/md07557033/gallery/D-1.jpg",
      description: "Lorem ipsum dolor sit,  quidem.",
    },
    {
      name: 'Laptop 24"',
      price: 3200,
      imgurl:
        "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00",
      description: "Lorem ipsum dolor sit,  quidem.",
    },
  ];

  return (
    <div className="App">
      <div className="header-banner">
        <img
          className="header-img"
          src="/images/coderhouse.jpg"
          alt="Coderhouse"
        />
      </div>
      <h1 className="title">Coderhouse React 34710 ⚛</h1>
      <p style={styles}>{usuario}</p>
      <br />

      <Button text="Click me" />

      <ButtonChildren type="alert">Click me with Childrens</ButtonChildren>

      <div className="main">
        {/* 
        <CardWithObject data={dataProducts[0]} />
        <CardWithObject data={dataProducts[1]} />
        <CardWithObject data={dataProducts[2]} /> */}
      </div>
    </div>
  );
}

export default Ejemplos;
