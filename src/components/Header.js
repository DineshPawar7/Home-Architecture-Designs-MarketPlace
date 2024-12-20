import React from 'react';
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './styles/Header.css';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <header className="header">
      <div className="logo">Rushi- The Cad Designer</div>

      <nav className="nav-menu">
        <ul>
        <li><Link to="/pricing">Pricing</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#services">Services</a></li>
          <li>
          <button onClick={() => loginWithRedirect()} className='login-button'>Log In</button>
          </li>
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
