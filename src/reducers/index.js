import { combineReducers } from "redux";

import authReducer from "./authReducer";
import cardsReducer from "./cardsReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  cards: cardsReducer,
});

export default rootReducer;
