import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link to="/">
      <h1>Bookstore</h1>
    </Link>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
