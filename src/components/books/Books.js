import React from 'react';
import { useSelector } from 'react-redux';
import NewBook from '../add-books/addBooks';
import BooksInfo from '../books-info/booksInfo';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);

  return (
    <section className="books-section">
      <div id="books-list">
        {bookList.map((book) => (
          <BooksInfo
            title={book.title}
            author={book.author}
            id={book.id}
            key={book.id}
          />
        ))}
      </div>
      <NewBook />
    </section>
  );
};

export default Books;
