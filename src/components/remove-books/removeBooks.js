import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const bookInfo = (props) => {
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

export default bookInfo;
