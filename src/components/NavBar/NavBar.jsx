import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <Link to="/">
          <li>Inicio</li>
        </Link>
        <Link to="/category/B">Categoría B</Link>
        <Link to="/category/B">Categoría C</Link>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
