import axios from "axios";

export const authUser = () => async (dispatch) => {
  const res = await axios.post("https://localhost:5000/signin");
  dispatch({
    type: "AUTH",
    payload: {
      jwt: res.token,
      user: res.user,
    },
  });
};
export const signUpUser = (user) => async (dispatch) => {
  console.log("SIGN UP  ACTION", user);
  const res = await axios.post("http://localhost:5000/signup", user, {
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
