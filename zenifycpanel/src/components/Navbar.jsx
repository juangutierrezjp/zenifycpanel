// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';  // Asegúrate de importar tu logo correctamente

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="logo-text">Zenify </span>
        <span className="logo-text" style={{color: "#45a049", marginLeft:"5px"}}>Labs</span>
        <span className="logo-text" style={{ marginLeft:"4px"}}>™</span>
      </div>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/estadisticas">Estadísticas</Link>
        <Link to="/ajustes">Ajustes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
