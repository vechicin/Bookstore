const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QKoyZOzmkUQhnurV30Gv/books';

export const fetchBookAPI = async () => {
  const response = await fetch(baseURL).then((data) => data.json());
  return response;
};

export const addBookAPI = async (newBook) => {
  await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  });
};

export const removeBookAPI = async (id) => {
  await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  });
};

export default {
  fetchBookAPI,
  addBookAPI,
  removeBookAPI,
};
