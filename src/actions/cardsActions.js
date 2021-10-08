import axios from "axios";
import { cardsURL, transactionsURL, addTransactionURL } from "../api/serverapi";
import { useSelector } from "react-redux";

export const getCards = (jwt) => async (dispatch) => {
  axios.defaults.headers.common["Authorization"] = jwt;
  const res = await axios.get(cardsURL, {
    "Content-Type": "application/json",
  });
  dispatch({
    type: "GET_CARDS",
    payload: {
      cards: res.data,
    },
  });
};
export const addCard = (jwt, card) => async (dispatch) => {
  if (jwt) {
    axios.defaults.headers.common["Authorization"] = jwt;
    const res = await axios.post(cardsURL, card, {
      "Content-Type": "application/json",
    });
    dispatch({
      type: "ADD_CARD",
      payload: {
        card: { ...res.data, transactions: [] },
      },
    });
  }
};
export const getCardTransactions = (cards, jwt, cardId) => async (dispatch) => {
  if (jwt) {
    dispatch({
      type: "TRANSACTIONS_LOADING",
      payload: {
        cardId,
      },
    });
    axios.defaults.headers.common["Authorization"] = jwt;
    const transactions = await axios.get(transactionsURL(cardId), {
      "Content-Type": "application/json",
    });
    dispatch({
      type: "GET_TRANSACTIONS",
      payload: {
        cardId,
        transactions: transactions.data,
      },
    });
  }
};
export const newTransaction =
  (jwt, cardId, transaction) => async (dispatch) => {
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = jwt;
      const transactions = await axios.post(
        addTransactionURL(cardId),
        transaction,
        {
          "Content-Type": "application/json",
        }
      );
      dispatch({
        type: "ADD_TRANSACTION",
        payload: {
          cardId,
          transaction,
        },
      });
    }
  };
// export const signUpUser = (user) => async (dispatch) => {
//   const res = await axios.post(signUpURL, user, {
//     "Content-Type": "application/json",
//   });
//   console.log(res);
//   dispatch({
//     type: "SIGNUP",
//     payload: {
//       jwt: res.data.token,
//       user: res.data.user,
//     },
//   });
// };
