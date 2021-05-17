
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Guest from "layouts/Guest.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login" component={Guest} />
      <Route path="/admin" component={Admin} />
      <Route path="/product" component={Admin} />
      <Route path="/" component={Guest} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
