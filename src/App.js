import "./App.css";

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// PAGES
import Home from "./screens/Home";
import Category from "./screens/Category";
import Weath from "./screens/Weath";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
// -- CATEGORY WISE
import Business from "./components/Categories/Business";
import Entertainment from "./components/Categories/Entertainment";
import Science from "./components/Categories/Science";
import Tech from "./components/Categories/Tech";
import Sports from "./components/Categories/Sports";
import Health from "./components/Categories/Health";
import { CircleLoader } from "react-spinners";
import { useState, useEffect } from "react";
import  ReactGA  from "react-ga4";

function App() {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    ReactGA.initialize("G-XWCWMMBK60");

    ReactGA.send("pageview");
  },[]);

  const [isLoading, setIsLoading] = useState(true);
  const history = createBrowserHistory();

  return isLoading ? (
    <div className="App">
      <div id="loader-style">
        <CircleLoader color="#772e9e" loading />
        <h2 style={{ color: "#772e9e", marginTop: "8px" }}>Loading</h2>
      </div>
    </div>
  ) : (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/weather" component={Weath} />
          <Route path="/about" component={About} />
          <Route path="/business" component={Business} />
          <Route path="/entertainment" component={Entertainment} />
          <Route path="/science" component={Science} />
          <Route path="/tech" component={Tech} />
          <Route path="/sports" component={Sports} />
          <Route path="/health" component={Health} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
