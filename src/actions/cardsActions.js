import axios from "axios";
import { cardsURL } from "../api/serverapi";

export const getCards = (jwt) => async (dispatch) => {
  axios.defaults.headers.common["Authorization"] = jwt;
  console.log("JWT", jwt);
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
