import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BooksInfo = (props) => {
  const {
    item_id, title, category,
  } = props;

  console.log(props);

  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeBook(item_id));
  };

  return (
    <li className="book-info">
      <p className="title">{title}</p>
      <p className="category">{category}</p>
      <button type="button" onClick={remove}>Remove</button>
    </li>
  );
};

BooksInfo.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BooksInfo;
