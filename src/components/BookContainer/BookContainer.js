import React from 'react';
import PropTypes from 'prop-types';

import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';

const BookContainer = ({ books }) => (
  <div>
    <ul>
      {books.map((book) => (
        <li key={book.item_id}>
          <Book book={book} />
        </li>
      ))}
    </ul>
    <AddBook />
  </div>
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
