import "./App.css";
import Ejemplos from "./components/Ejemplos/Ejemplos";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Ejemplos />
      <ItemListContainer />
      {/* <ItemDetailContainer item={3} /> */}
    </div>
  );
}

export default App;
