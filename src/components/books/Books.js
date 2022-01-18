import React from 'react';
import NewBook from '../add-books/addBooks';
import bookInfo from '../remove-books/removeBooks';

const Books = () => (
  <div className="book-list">
    <ul className="book-list-container" />
    <button type="button">Remove</button>
    <form>
      <input />
      <input />
      <button type="submit">Add book</button>
    </form>
  </div>
);

export default Books;
