import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <Link to="/">Books</Link>
      <Link to="categories">Categories</Link>
    </ul>
  </nav>
);

export default Navbar;
