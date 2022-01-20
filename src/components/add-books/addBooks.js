import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const NewBook = () => {
  const [state, setState] = useState({
    title: '',
    category: '',
    item_id: '',
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const submitBookToStore = (e) => {
    e.preventDefault();

    if (state.title) {
      const newBook = {
        item_id: v4(),
        title: state.title,
        category: state.category,
      };

      dispatch(addBook(newBook));

      setState({
        title: '',
        category: '',
        item_id: '',
      });
    }
  };

  return (
    <form>
      <input
        type="text"
        id="book-name"
        name="title"
        placeholder="Enter book's title"
        value={state.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Enter book's category"
        value={state.category}
        onChange={handleChange}
      />
      <input type="submit" value="Add book" onClick={submitBookToStore} />
    </form>
  );
};

export default NewBook;
