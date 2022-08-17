import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm/UserForm";

import {CartProvider} from './store/cartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/detalle/:id" element={<ItemDetailContainer />} />
              <Route path="/contact" element={<UserForm />} />
            </Routes>           
        </CartProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
