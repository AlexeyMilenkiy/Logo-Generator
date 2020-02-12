import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "./history";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Layout} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
