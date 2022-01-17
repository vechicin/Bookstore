import React from 'react';
import { Link}  from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return(
    <nav className="navbar">
      <ul>
        <Link to="/">Books</Link>
        <Link to="categories">Categories</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
