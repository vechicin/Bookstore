const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';
const initialState = {
  books: [],
};

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QKoyZOzmkUQhnurV30Gv/books';

const addBook = (book) => (dispatch) => fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(book),
})
  .then((response) => response.text())
  .then((data) => dispatch({ type: ADD_BOOK, book, data }));

const removeBook = (itemId) => (dispatch) => fetch(`${apiUrl}/${itemId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ item_id: itemId }),
})
  .then((response) => response.text())
  .then((data) => dispatch({ type: REMOVE_BOOK, item_id: itemId, data }));

const fetchBook = () => (dispatch) => fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => console.log(response.json()))
  .then((data) => dispatch({ type: FETCH_BOOK, data }));

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK: {
      const list = [];
      Object.keys(action.data).forEach((id) => {
        list.push({ item_id: id, ...action.data[id][0] });
      });
      return {
        ...state,
        books: [...state.books, ...list],
      };
    }

    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.book],
      };

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
export { addBook, removeBook, fetchBook };
