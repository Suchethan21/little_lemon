import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { IMAGES } from '../../utils/images';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={IMAGES.LOGO} alt="Little Lemon" className="logo" />
        </Link>
      </div>
      <nav className="nav-menu">
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/menu" className={isActive('/menu')}>Menu</Link>
        <Link to="/booking" className={isActive('/booking')}>Reserve a Table</Link>
        <Link to="/signin" className={isActive('/signin')}>Sign In</Link>
        <div className="cart-icon">
          <Link to="/cart" className={isActive('/cart')}>🛒</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
