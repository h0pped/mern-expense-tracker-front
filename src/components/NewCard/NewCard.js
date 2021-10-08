import React, { useState } from "react";
import "./styles.scss";
export default React.forwardRef(({}, ref) => {
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
    console.log(inputs);
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
                name="title"
                id="titleInput"
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
