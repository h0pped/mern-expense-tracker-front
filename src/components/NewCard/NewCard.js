import React, { useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
// actions
import { addCard } from "../../actions/cardsActions";
export default React.forwardRef(({}, ref) => {
  const { jwt } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const inputHandler = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setInputs({
      ...inputs,
      [inputName]: inputValue,
    });
  };
  const submitCardHandler = () => {
    if (inputs.name && inputs.balance) {
      console.log(inputs);
      dispatch(addCard(jwt, inputs));
      console.log("DISPATCH");
    }
  };
  return (
    <div ref={ref} className="card-container">
      <div className="new-card">
        <h3>Add new Card</h3>

        <form>
          <div className="form-input">
            <label htmlFor="title">Title</label>
            <div className="input-container">
              <input
                onChange={inputHandler}
                type="text"
                name="name"
                id="nameInput"
                placeholder="Savings"
              />
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="balance">Initial balance</label>
            <div className="input-container">
              <input
                onChange={inputHandler}
                type="number"
                step="0.01"
                name="balance"
                id="balanceInput"
                placeholder="2.99"
              />
              <label htmlFor="balance">$</label>
            </div>
          </div>
        </form>
      </div>
      <button type="submit" onClick={submitCardHandler}>
        Add
      </button>
    </div>
  );
});
