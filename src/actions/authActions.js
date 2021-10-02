import axios from "axios";
import { signInURL, signUpURL, logOutURL } from "../api/serverapi";
export const authUser = (user) => async (dispatch) => {
  const res = await axios.post(signInURL, user, {
    "Content-Type": "application/json",
  });
  dispatch({
    type: "AUTH",
    payload: {
      jwt: res.data.token,
      user: res.data.user,
    },
  });
};
export const signUpUser = (user) => async (dispatch) => {
  const res = await axios.post(signUpURL, user, {
    "Content-Type": "application/json",
  });
  console.log(res);
  dispatch({
    type: "SIGNUP",
    payload: {
      jwt: res.data.token,
      user: res.data.user,
    },
  });
};
