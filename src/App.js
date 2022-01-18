import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';

const App = () => (
  <div className="Bookstore">
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Navbar />
              <Books />
            </>
        )}
        />
        <Route
          path="/categories"
          element={(
            <>
              <Navbar />
              <Categories />
            </>
        )}
        />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
