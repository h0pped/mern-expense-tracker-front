import React, { useState } from "react";
import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { newTransaction } from "../../actions/cardsActions";
const NewTransaction = ({ cardId, setToggler }) => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((state) => state.auth);
  const [inputs, setInputs] = useState({});

  const inputHandler = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setInputs({
      ...inputs,
      [inputName]: inputValue,
    });
  };
  const newTransactionHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    dispatch(newTransaction(jwt, cardId, inputs));
  };
  return (
    <div className="new-transaction-container">
      <form onSubmit={newTransactionHandler}>
        <div className="form-input">
          <label htmlFor="title">Title</label>
          <div className="input-container">
            <input
              onChange={inputHandler}
              type="text"
              name="title"
              id="titleInput"
              placeholder="Netflix Subscription"
            />
          </div>
        </div>
        <div className="form-input">
          <label htmlFor="amount">Amount</label>
          <div className="input-container">
            <input
              onChange={inputHandler}
              type="number"
              step="0.01"
              name="amount"
              id="amountInput"
              placeholder="2.99"
            />
            <label htmlFor="amount">$</label>
          </div>
        </div>
        <div className="form-submit">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
export default NewTransaction;
