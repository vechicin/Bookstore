const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';
const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QKoyZOzmkUQhnurV30Gv/books';

const createBook = (item_id, title, category) => ({
  item_id,
  title,
  category,
  author: '',
});

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

const fetchingBook = () => async (dispatch) => {
  const response = await fetch(apiUrl, {
    method: 'GET',
  });
  try {
    const data = await response.json();
    dispatch(fetchBook(data));
  } catch (error) {
    console.error(error);
  }
};

const postingBook = (book) => async (dispatch) => {
  dispatch(addBook(book));
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  try {
    console.log(await response.text());
  } catch (error) {
    console.error(error);
  }
};

const deletingBook = (id) => async (dispatch) => {
  dispatch(removeBook(id));
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  });
  try {
    console.log(await response.text());
  } catch (error) {
    console.error(error);
  }
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      const { item_id, title, category } = action.payload;
      return [...state, createBook(item_id, title, category)];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.id);

    case FETCH_BOOK:
      const updatedState = [];
      Object.keys(action.payload).forEach((keys, id) => {
        updatedState.push(createBook(
          keys,
          Object.values(action.payload)[id][0].title,
          Object.values(action.payload)[id][0].category,
        ));
      });
      return updatedState;

    default:
      return state;
  }
};

export default reducer;
export {
  addBook, removeBook, fetchBook, fetchingBook, postingBook, deletingBook,
};
