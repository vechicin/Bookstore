import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletingBook } from '../../redux/books/books';

const BooksInfo = (props) => {
  const {
    title, author, category, item_id,
  } = props;

  const dispatch = useDispatch();

  const remove = () => {
    dispatch(deletingBook(item_id));
  };

  return (
    <li className="book-info">
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <p className="category">{category}</p>
      <button type="button" onClick={remove}>Remove</button>
    </li>
  );
};

BooksInfo.defaultProps = {
  category: '',
};

BooksInfo.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
  category: PropTypes.string,
};

export default BooksInfo;
