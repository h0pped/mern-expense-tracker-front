const initState = {
  jwt: "",
  user: null,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        jwt: action.payload.jwt,
        user: action.payload.user,
      };
    case "SIGNUP":
      return {
        ...state,
        jwt: action.payload.jwt,
        user: action.payload.user,
      };
    default:
      return { ...state };
  }
};
export default authReducer;
