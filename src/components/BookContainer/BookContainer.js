import React from 'react';
import PropTypes from 'prop-types';

import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';

const BookContainer = ({ books }) => (
  <section>
    <ul className="booklist">
      {books.map((book) => (
        <li className="book" key={book.item_id}>
          <Book book={book} />
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
