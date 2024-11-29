import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importamos el CSS del Navbar

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo o Nombre del sitio */}
      <div className="navbar-logo">
        <Link to="/">Lily's World</Link>
      </div>

      {/* Botón del menú */}
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Enlaces del menú */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/cuando-nos-conocimos">Cuando nos conocimos</Link>
        </li>
        <li>
          <Link to="/como-me-enamore">Cómo me enamoré</Link>
        </li>
        <li>
          <Link to="/lo-que-es-lily">Lo que es Lily para mí</Link>
        </li>
        <li>
          <Link to="/mis-suenos-junto-a-ti">Mis sueños junto a ti</Link>
        </li>
        <li>
          <Link to="/feliz-cumpleanos">Feliz cumpleaños</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
