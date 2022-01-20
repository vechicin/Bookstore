import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewBook from '../add-books/addBooks';
import BooksInfo from '../books-info/booksInfo';
import { fetchBook } from '../../redux/books/books';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  return (
    <section className="books-section">
      <div id="books-list">
        <ul className="list-container">
          {bookList.books.map((book) => (
            <BooksInfo
              title={book.title}
              author={book.author}
              category={book.category}
              id={book.id}
              key={book.id}
            />
          ))}
        </ul>
      </div>
      <NewBook />
    </section>
  );
};

export default Books;
