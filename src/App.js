import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  let userColor = "green";
  const styles = { marginTop: "200px", color: userColor };
  let usuario = "Santiago";

  return (
    <div>
        <NavBar/>
        <h1 className="title">Coderhouse React 34710 ⚛</h1>
        <br/>
        <p style={styles}>{usuario}</p>
        <img width="200" src="/images/logos_coderhouse.png" alt="Coderhouse" />
        <br/>
        <button onClick={ ()=> alert("Click event callback") }>Click me</button>
    </div>
  );
}

export default App;