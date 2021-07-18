import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Pricing from "./components/Pricing";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
