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
    case "GET_TRANSACTIONS":
      return {
        ...state,
        cards: state.cards.map((el) => {
          if (el._id === action.payload.cardId) {
            return {
              ...el,
              transactions: action.payload.transactions,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return { ...state };
  }
};
export default cardsReducer;
