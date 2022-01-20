const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';
const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QKoyZOzmkUQhnurV30Gv/books';
const initialState = [];

// const fetchingBook = async () => {
//   const response = await fetch(apiUrl).then((data) => data.json());
//   return response;
// };

const postingBook = async (book) => {
  await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
};

const deletingBook = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  });
};

export const addBook = (book) => async (dispatch) => {
  await postingBook(book);
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};

export const removeBook = (id) => async (dispatch) => {
  await deletingBook(id);
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};

export const fetchBook = () => async (dispatch) => {
  const data = await fetch(apiUrl, {
    method: 'GET',
  }).then((response) => response.json());

  dispatch({
    type: FETCH_BOOK,
    payload: data,
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
