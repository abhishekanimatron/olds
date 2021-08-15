import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./screens/Home";
import Global from "./screens/Global";
import Saved from "./screens/Saved";
import Other from "./screens/Other";

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/global" component={Global} />
          <Route path="/saved" component={Saved} />
          <Route path="/others" component={Other} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
