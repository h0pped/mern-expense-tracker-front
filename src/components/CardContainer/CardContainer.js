import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import CardActions from "../CardActions/CardActions";
import TransactionsCard from "../TransactionsCard/TransactionsCard";
import "./styles.scss";

export default React.forwardRef(({ index }, ref) => {
  const card = useSelector((state) => state.cards.cards[index]);
  return (
    <div ref={ref} className="card-container">
      <Card index={index} />
      <CardActions cardId={card._id} />
      <TransactionsCard
        transactions={card.transactions}
        key={card._id}
        cardId={card._id}
      />
    </div>
  );
});
