import React, { useState, useEffect } from "react";

import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../actions/authActions";
import { Redirect } from "react-router";

const SignUp = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [inputs, setInputs] = useState({});

  const inputHandler = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setInputs({
      ...inputs,
      [inputName]: inputValue,
    });
  };
  const formHandler = (e) => {
    e.preventDefault();
    if (inputs.confirmPassword === inputs.password) {
      dispatch(signUpUser(inputs));
    }
  };
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  if (auth.jwt) {
    return <Redirect to="/main" />;
  } else {
    return (
      <div className="auth-container page">
        <h2>Sign up</h2>
        <form onSubmit={formHandler} className="login-form">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="nameInput"
              placeholder="John"
              onChange={inputHandler}
            />
          </div>
          <div className="input-container">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              name="surname"
              id="surnameInput"
              placeholder="Wick"
              onChange={inputHandler}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="emailInput"
              placeholder="johnweewee@gmail.com"
              onChange={inputHandler}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="passwordInput"
              onChange={inputHandler}
            />
          </div>
          <div className="input-container">
            <label htmlFor="confirmPassword">Confirm it</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPasswordInput"
              onChange={inputHandler}
            />
          </div>
          <div className="submit-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
};
export default SignUp;
