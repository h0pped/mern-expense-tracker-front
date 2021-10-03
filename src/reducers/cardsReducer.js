const initState = {
  cards: null,
};
const cardsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CARDS":
      return {
        ...state,
        cards: action.payload.cards,
      };
    default:
      return { ...state };
  }
};
export default cardsReducer;
