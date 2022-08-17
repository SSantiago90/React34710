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
        <li>Categoría A</li>
        <li>Categoría C</li>
      </ul>
    </div>
  );
}

export default NavBar;
