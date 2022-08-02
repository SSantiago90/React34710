import "./App.css";
import Ejemplos from "./components/Ejemplos/Ejemplos";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Ejemplos />
      <ItemListContainer />
    </div>
  );
}

export default App;
