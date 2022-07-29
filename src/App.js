import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card/Card";
import CardWithObject from "./components/Card/CardWithObject";
import Button from "./components/Button/Button";
import ButtonChildren from "./components/Button/ButtonChildren";
import ItemCount from "./components/ItemCount";

function App() {
  let userColor = "green";
  const styles = { marginTop: "20px", color: userColor };
  let usuario = "Santiago";

  const dataProducts = [
    {
      name: 'Televisor 52"',
      price: 2090,
      imgurl: "https://picsum.photos/280/260",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,   quidem.",
    },
    {
      name: 'Monitor 22"',
      price: 890,
      imgurl: "https://picsum.photos/280/260",
      description: "Lorem ipsum dolor sit,  quidem.",
    },
  ];

  return (
    <div className="App">
      <NavBar />
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
        <CardWithObject data={dataProducts[0]} />
        <CardWithObject data={dataProducts[1]} />
        <Card
          name="Televisor HD"
          price={2090}
          imgurl="https://picsum.photos/280/260"
          description="Lorem Ipsum"
        />
      </div>

      <ItemCount initial={1} stock={10} />
      <ItemCount initial={5} stock={20} />
      <ItemCount initial={10} stock={30} />
    </div>
  );
}

export default App;
