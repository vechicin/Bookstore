import React from 'react';
import PropTypes from 'prop-types';

import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';

const BookContainer = ({ books }) => (
  <section>
    <ul className="booklist">
      {books.map((book) => (
        <li className="book" key={book.item_id}>
          <div className="book-info">
            <Book book={book} />
          </div>
          <div className="percentages-container">
            <div className="circle" />
            <p className="percentages">
              {Math.floor(Math.random() * 100)}
              %
              <span>Completed</span>
            </p>
          </div>
          <div className="chapters">
            <p className="current">CURRENT CHAPTER</p>
            <p className="chapter">CHAPTER 17</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </li>
      ))}
    </ul>
    <AddBook />
  </section>
);

BookContainer.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

BookContainer.defaultProps = {};

export default BookContainer;
