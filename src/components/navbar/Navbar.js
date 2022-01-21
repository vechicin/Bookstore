import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Navbar>
    <h1>Bookstore</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </Navbar>
);

export default Navbar;
