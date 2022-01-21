import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 } from 'uuid';

import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const dispatch = useDispatch();

  const BookTitleInputHandler = (e) => {
    setBookTitle(e.target.value);
  };

  const CategoryHandler = (e) => {
    setBookCategory(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: v4(),
      title: bookTitle,
      category: bookCategory,
    };
    dispatch(addBook(newBook));
    setBookTitle('');
    setBookCategory('');
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Enter book title"
        value={bookTitle}
        onChange={BookTitleInputHandler}
      />
      <input
        type="text"
        placeholder="Enter book category"
        value={bookCategory}
        onChange={CategoryHandler}
        required
      />
      <button
        type="submit"
        onClick={submitBookToStore}
        required
      >
        Add book
      </button>
    </form>
  );
};

export default AddBook;
