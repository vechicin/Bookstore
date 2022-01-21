import React from 'react';
import PropTypes from 'prop-types';

import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';

const BookList = ({ books }) => (
  <div>
    <AddBook />
    {books.length === 0 && (
      <div>No books added yet</div>
    )}
    <ul>
      {books.map((book) => (
        <li key={book.item_id}>
          <Book book={book} />
        </li>
      ))}
    </ul>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

BookList.defaultProps = {};

export default BookList;
