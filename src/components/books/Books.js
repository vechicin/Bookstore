import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from '../../redux/books/books';
import NewBook from '../add-books/addBooks';
import BooksInfo from '../books-info/booksInfo';

const Books = () => {
  const initialState = useSelector((state) => state.booksReducer);
  const arrayBooks = Object.values(initialState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  return (
    <section className="books-section">
      <div id="books-list">
        <ul className="list-container">
          {arrayBooks.map((array) => array.map((book) => (
            <BooksInfo
              title={book.title}
              category={book.category}
              id={book.item_id}
              key={book.item_id}
            />
          )))
          }
        </ul>
      </div>
      <NewBook />
      <button type="button" onClick={() => dispatch(fetchBook())}>Download</button>
    </section>
  );
};

export default Books;
