import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchBook } from './redux/books/books';
import Nav from './components/navbar/Navbar';
import BookContainer from './components/BookContainer/BookContainer';
import Categories from './components/categories/Categories';

const App = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<BookContainer books={books} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/bookstore" element={<BookContainer books={books} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
