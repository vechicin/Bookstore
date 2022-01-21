import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul className="navlinks">
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link id="categories-link" to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
