import React, { useEffect, createRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCardTransactions, deleteCard } from "../../actions/cardsActions";
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
  const flicking = createRef();

  let clonedCards = JSON.parse(JSON.stringify(cards));
  const changeCardHandler = async (e) => {
    console.log("CHANGE", e);
    if (e.index !== cards.length) {
      //if not creation card selected
      await dispatch(getCardTransactions(cards, jwt, cards[e.index]._id));
    }
  };
  const removeCardHandler = async (id) => {
    // dispatch(deleteCard(jwt, cardId));
    console.log("remove card");
  };
  useEffect(async () => {
    console.log("ORIGINAL", cards);
    console.log("CLONED", clonedCards);
    console.log(flicking);
    if (cards && jwt && !cards[0].transactions) {
      await dispatch(getCardTransactions(cards, jwt, cards[0]._id));
    }
  }, [cards, jwt, dispatch, flicking]);
  if (!cards) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="cards-stack-container">
        <Flicking
          className="cards-stack"
          onChanged={changeCardHandler}
          ref={flicking}
        >
          {cards.map((card, index) => (
            <CardContainer
              index={index}
              key={card._id}
              removeCardHandler={removeCardHandler}
            />
          ))}
          <NewCard />
        </Flicking>
      </div>
    );
  }
};
export default CardsStack;
