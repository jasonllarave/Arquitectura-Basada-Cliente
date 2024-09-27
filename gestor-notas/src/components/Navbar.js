import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Principal</Link></li>
        <li><Link to="/notas">Notas</Link></li>
        <li><Link to="/agregar-nota">Agregar Nota</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
