const BASE_URL = process.env.REACT_APP_API_URL;

export const signUpURL = `${BASE_URL}/signup`;
export const signInURL = `${BASE_URL}/signin`;
export const logOutURL = `${BASE_URL}/logout`;
export const cardsURL = `${BASE_URL}/cards`;
export const transactionsURL = (cardId) =>
  `${BASE_URL}/card/${cardId}/transactions`;
export const addTransactionURL = (cardId) =>
  `${BASE_URL}/transactions/${cardId}`;
export const deleteCardURL = (cardId) => `${BASE_URL}/cards/${cardId}`;
