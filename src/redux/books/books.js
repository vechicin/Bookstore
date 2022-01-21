import {
  fetchBookAPI,
  addBookAPI,
  removeBookAPI,
} from '../../API/APIHelper';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

const initialState = [];

export const addBook = (newBook) => async (dispatch) => {
  await addBookAPI(newBook);
  dispatch({
    type: ADD_BOOK,
    payload: newBook,
  });
};

export const removeBook = (id) => async (dispatch) => {
  await removeBookAPI(id);
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};

export const fetchBook = () => async (dispatch) => {
  const data = await fetchBookAPI();
  const books = [];
  [...Object.entries(data)].forEach((b) => {
    const book = {
      item_id: b[0],
      title: b[1][0].title,
      category: b[1][0].category,
    };
    books.push(book);
  });

  dispatch({
    type: FETCH_BOOK,
    payload: books,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
