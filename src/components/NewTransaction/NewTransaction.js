import React from "react";
import "./styles.scss";
const NewTransaction = ({ cardId, setToggler }) => {
  return (
    <div class="new-transaction-container">
      <p>New Transaction for {cardId}</p>
    </div>
  );
};
export default NewTransaction;
