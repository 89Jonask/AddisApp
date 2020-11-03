import React, { useState, useContext } from "react";
import { UserContext } from "../../shared/global/provider/UserProvider";
import { Link, useHistory } from "react-router-dom";
import "./Profile.css";
import RoutingPath from "../../routes/RoutingPath";

export const Profile = () => {
  const [setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const history = useHistory();
  const [setAuthenticatedUser] = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("username");
    setAuthenticatedUser(false);
    history.push(RoutingPath.homeView);
  };

  return (
    <div className="profileWrapper">
      <Link onClick={() => logout()}>Logout</Link>
    </div>
  );
};
