import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Recipe Sharing</Link>
      <div className="navbar-links">
        <Link to="/recipes" className="navbar-link">Recipes</Link>
        <Link to="/recipes/new" className="navbar-link">Add Recipe</Link>
        <Link to="/login" className="navbar-link">Login</Link>
        <Link to="/register" className="navbar-link">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;