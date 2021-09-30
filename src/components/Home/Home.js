import React from "react";
import faceSvg from "../../assets/svg/face-title.svg";
import "./styles.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container">
      <img className="title-illustration" src={faceSvg} alt="face" />
      <div className="container-content">
        <h1 className="title">Manage Your money flow</h1>
        <div className="auth-container">
          <Link to="/signin" component="a">
            Sign in
          </Link>
          <Link to="/signup" component="a">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
