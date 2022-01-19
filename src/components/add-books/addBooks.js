import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const NewBook = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();

    if (state.title) {
      const newBook = {
        id: v4(),
        title: state.title,
        author: state.author,
        category: state.category,
      };

      dispatch(addBook(newBook));

      setState({
        title: '',
        author: '',
        category: '',
      });
    }
  };

  return (
    <form>
      <input
        type="text"
        id="book-name"
        name="title"
        placeholder="Please enter book's title"
        value={state.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        id="author-name"
        name="author"
        placeholder="Please enter author's name"
        value={state.author}
        onChange={handleChange}
      />
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Please enter book's category"
        value={state.category}
        onChange={handleChange}
      />
      <input type="submit" value="Add book" onClick={submitBookToStore} />
    </form>
  );
};

export default NewBook;
