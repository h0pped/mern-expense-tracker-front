import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../../actions/cardsActions";
import "./styles.scss";

import NewTransaction from "../NewTransaction/NewTransaction";
const CardActions = ({ cardId, removeCardHandler }) => {
  const { jwt } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [newTransactionToggler, setNewTransactionToggler] = useState(false);
  const newTransactionButtonHandler = () => {
    setNewTransactionToggler(true);
  };

  return (
    <>
      <div className="actions-container">
        <div className="action">
          <ion-icon name="analytics-outline" size="large"></ion-icon>
          <p className="action-description">Show statistics</p>
        </div>
        <div className="action" onClick={newTransactionButtonHandler}>
          <ion-icon name="cash-outline" size="large"></ion-icon>
          <p className="action-description">New Transaction</p>
        </div>
        <div className="action" onClick={() => removeCardHandler(cardId)}>
          <ion-icon name="trash-outline" size="large"></ion-icon>
          <p className="action-description">Delete card</p>
        </div>
      </div>
      {newTransactionToggler === true ? (
        <NewTransaction
          cardId={cardId}
          toggler={newTransactionToggler}
          setToggler={setNewTransactionToggler}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default CardActions;
