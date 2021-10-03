import React, { useState, useEffect } from "react";

import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../actions/cardsActions";

import CardsStack from "../CardsStack/CardsStack";
const Main = () => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getCards(jwt));
  }, [dispatch]);

  const { cards } = useSelector((state) => state);
  console.log(cards);
  return (
    <div className="main-page">
      <CardsStack />
    </div>
  );
};
export default Main;
