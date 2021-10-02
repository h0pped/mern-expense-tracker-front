import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container page">
      <div className="container-content">
        <h1 className="title">Manage Your money flow</h1>
        <div className="auth-links-container">
          <Link to="/signin">Sign in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
