import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchingBook } from '../../redux/books/books';
import store from '../../redux/configureStore';
import NewBook from '../add-books/addBooks';
import BooksInfo from '../books-info/booksInfo';

const Books = () => {
  const [books, setBooks] = useState([]);

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(fetchingBook());
  }, [dispatch]);

  useEffect(() => {
    setBooks(store.getState().booksReducer);
  }, [store.getState.booksReducer]);

  return (
    <section className="books-section">
      <div id="books-list">
        <ul className="list-container">
          {books.map((book) => (
            <BooksInfo
              title={book.title}
              author={book.author}
              category={book.category}
              id={book.item_id}
              key={book.item_id}
            />
          ))}
        </ul>
      </div>
      <NewBook />
      <button type="button" onClick={() => dispatch(fetchingBook())}>Download</button>
    </section>
  );
};

export default Books;
