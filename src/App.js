import { Link, Switch, Route } from "react-router-dom";
import "./app.scss";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
