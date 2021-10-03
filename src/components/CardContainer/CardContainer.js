import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import "./styles.scss";

export default React.forwardRef(({ index }, ref) => {
  const card = useSelector((state) => state.cards.cards[index]);
  return (
    <div ref={ref} className="card-container">
      <Card index={index} />
      {card?.transactions?.map((el) => (
        <div className="transaction">
          <p>{el.title}</p>
          <p>{el.amount}</p>
        </div>
      ))}
    </div>
  );
});
