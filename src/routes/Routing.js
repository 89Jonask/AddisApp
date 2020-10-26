import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../view/homeview/HomeView.js";
import { About } from "../view/aboutview/AboutView.js";
import { Signin } from "../view/signin/Signin.js";
import { UserContext } from "../shared/global/provider/UserProvider.js";
import { Profileview } from "../view/profileview/ProfileView.js";
import { Settingsview } from "../view/settingsview/SettingsView.js";

export const Routing = (props) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const checkIfUserIsAuthenticatedInBrowser = () => {
    setAuthenticatedUser(localStorage.getItem("username"));
  };

  useEffect(() => {
    checkIfUserIsAuthenticatedInBrowser();
  });

  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/profile" component={Profileview} />
        <Route exact path="/settings" component={Settingsview} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
};
