import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Rushi- The Cad Designer</div>

      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>

      <div className="header-icons">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        <FaHeart className="icon heart-icon" />
        <FaShoppingCart className="icon cart-icon" />
      </div>
    </header>
  );
};

export default Header;
