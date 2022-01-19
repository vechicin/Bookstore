import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <Link className="navbar-links" to="/">Books</Link>
      <Link className="navbar-links" to="categories">Categories</Link>
    </ul>
  </nav>
);

export default Navbar;
