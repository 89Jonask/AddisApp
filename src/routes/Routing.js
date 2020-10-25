import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../view/home/Home.js";
import { About } from "../view/about/About.js";
import { Signin } from "../view/signin/Signin.js";

export const Routing = (props) => {
  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signin" component={Signin} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
};
