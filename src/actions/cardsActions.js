import axios from "axios";
import { cardsURL, transactionsURL } from "../api/serverapi";
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
export const getCardTransactions = (cards, jwt, cardId) => async (dispatch) => {
  if (jwt) {
    const card = cards.find((item) => item._id === cardId);
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
