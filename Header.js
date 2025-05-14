import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>TASTE OF AFRICA</h1>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/shop">Shop</Link> |{' '}
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
