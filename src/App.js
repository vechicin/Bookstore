import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchBooks } from './redux/books/books';
import Nav from './components/navbar/Navbar';
import BookList from './components/BookList/BookList';
import Categories from './components/categories/Categories';

const App = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<BookList books={books} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/bookstore" element={<BookList books={books} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
