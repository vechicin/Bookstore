import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { removeBook } from '../../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <>
      <p className="category">{book.category}</p>
      <p className="title">{book.title}</p>
      <button className="remove" type="button" onClick={remove}>
        REMOVE
      </button>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
