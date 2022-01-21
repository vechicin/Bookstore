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
      <p>{book.title}</p>
      <p>{book.category}</p>
      <button type="button" onClick={remove}>
        Remove
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
