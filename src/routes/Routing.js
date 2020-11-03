import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeView } from "../view/homeview/HomeView.js";
import { AboutView } from "../view/aboutview/AboutView.js";
import { SigninView } from "../view/signinview/SigninView.js";
import { UserContext } from "../shared/global/provider/UserProvider.js";
import { ProfileView } from "../view/profileview/ProfileView.js";
import { SettingsView } from "../view/settingsview/SettingsView.js";
import { PortfolioView } from "../view/portfolioview/PortfolioView.js";
import RoutingPath from "./RoutingPath";

export const Routing = (props) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const blockRouteIfAuthenticated = (navigateToView) => {
    return authenticatedUser ? HomeView : SigninView;
  };
  const blockRouteIfNotAuthenticated = (navigateToView) => {
    return !authenticatedUser ? SigninView : navigateToView;
  };

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
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.aboutView} component={AboutView} />
        <Route
          exact
          path={RoutingPath.portfolioView}
          component={PortfolioView}
        />
        <Route
          exact
          path={RoutingPath.signInView}
          component={blockRouteIfAuthenticated(SigninView)}
        />
        <Route
          exact
          path={RoutingPath.profileView}
          component={blockRouteIfNotAuthenticated(ProfileView)}
        />
        <Route
          exact
          path={RoutingPath.settingsView}
          component={blockRouteIfNotAuthenticated(SettingsView)}
        />
        <Route component={HomeView} />
      </Switch>
    </Router>
  );
};
