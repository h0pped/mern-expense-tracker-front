import React from "react";

import { useSelector } from "react-redux";
import Card from "../Card/Card";
import "./styles.scss";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";

const CardsStack = () => {
  const { cards } = useSelector((state) => state.cards);
  console.log("CARDS STACK", cards);
  if (!cards) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <Flicking className="cards-stack">
        {cards.map((card, index) => (
          <Card name={card.name} balance={card.balance} index={index} />
        ))}
      </Flicking>
    );
  }
};
export default CardsStack;
