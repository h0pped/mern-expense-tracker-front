const initState = {
  cards: null,
  transactions_loading: false,
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
        transactions_loading: null,
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
    case "TRANSACTIONS_LOADING":
      return {
        ...state,
        transactions_loading: action.payload.cardId,
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        cards: state.cards.map((el) => {
          if (el._id === action.payload.cardId) {
            return {
              ...el,
              transactions: [action.payload.transaction, ...el.transactions],
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
