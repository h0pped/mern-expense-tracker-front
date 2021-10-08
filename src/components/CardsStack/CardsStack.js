import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCardTransactions } from "../../actions/cardsActions";
import CardContainer from "../CardContainer/CardContainer";
import "./styles.scss";

import Flicking from "@egjs/react-flicking";
import NewCard from "../NewCard/NewCard";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";

const CardsStack = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);
  const { jwt } = useSelector((state) => state.auth);
  const changeCardHandler = async (e) => {
    console.log("CHANGE", e);
    if (e.index !== cards.length) {
      //if not creation card selected
      await dispatch(getCardTransactions(cards, jwt, cards[e.index]._id));
    }
  };
  useEffect(async () => {
    if (cards && jwt && !cards[0].transactions) {
      await dispatch(getCardTransactions(cards, jwt, cards[0]._id));
    }
  }, [cards, jwt, dispatch]);
  if (!cards) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="cards-stack-container">
        <Flicking className="cards-stack" onChanged={changeCardHandler}>
          {cards.map((card, index) => (
            <CardContainer index={index} key={card._id} />
          ))}
          <NewCard />
        </Flicking>
      </div>
    );
  }
};
export default CardsStack;
