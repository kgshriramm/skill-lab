import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Sweet Delights</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
