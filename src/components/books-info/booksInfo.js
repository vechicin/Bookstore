import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BooksInfo = (props) => {
  const {
    title, author, category, id,
  } = props;

  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-info">
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <button type="button" onClick={remove}>Remove</button>
    </div>
  );
};

BooksInfo.defaultProps = {
  category: '',
};

BooksInfo.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string,
};

export default BooksInfo;
