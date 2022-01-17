import React from 'react';
import render from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/redux/books/Books';
import Categories from './components/redux/categories/Categories';

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
