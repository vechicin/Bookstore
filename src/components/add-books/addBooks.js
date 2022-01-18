import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from 'src/redux/books/books';
import { uuidv4 } from 'uuid';

const NewBook = () => {

  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  const submitBook = (event) => {
    event.preventDefault();

    if(state.title) {
      const newBook = {
        id: uuidv4(),
        title: state.title,
        author: state.author,
      };

      dispatch(addBook(newBook));

      setState({
        title: '',
        author: '',
      });
    }
  };

  return(
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
      <input type="submit" value="Add book" onClick={submitBook} />
    </form>
  );
};

export default addBook;
