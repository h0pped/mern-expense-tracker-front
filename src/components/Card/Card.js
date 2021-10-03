import React from "react";

import { useSelector } from "react-redux";
import "./styles.scss";

export default React.forwardRef(({ index }, ref) => {
  const card = useSelector((state) => state.cards.cards[index]);
  console.log("CARD COMPONENT CARD", card);
  return (
    <div className="card" ref={ref}>
      <p className="card-name">{card.name}</p>
      <p className="card-balance">${card.balance}</p>
    </div>
  );
});
