import { Link, Switch, Route, useLocation } from "react-router-dom";
import "./app.scss";
import SignIn from "./components/Auth/SignIn";
import Home from "./components/Home/Home";
import faceSvg from "./assets/svg/face-title.svg";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SignUp from "./components/Auth/SignUp";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div
      className={
        "App " +
        (location.pathname === "/signin" || location.pathname === "/signup"
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
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
