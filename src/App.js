import React, { useRef, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./app.scss";
import SignIn from "./components/Auth/SignIn";
import Home from "./components/Home/Home";
import faceSvg from "./assets/svg/face-title.svg";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SignUp from "./components/Auth/SignUp";
import Main from "./components/Main/Main";

function App() {
  const location = useLocation();
  console.log(process.env.REACT_APP_API_URL);
  const nodeRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div
      className={
        "App " +
        (location.pathname === "/"
          ? ""
          : location.pathname === "/main"
          ? "main-illustration"
          : location.pathname === "/signin" || location.pathname === "/signup"
          ? "auth-illustration"
          : "")
      }
    >
      <img className="title-illustration" src={faceSvg} alt="face" />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={450} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/main" component={Main} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
