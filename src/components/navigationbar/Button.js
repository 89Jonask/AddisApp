import "./Button.css";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../shared/global/provider/UserProvider";
import { Profile } from "../profile/Profile";
import RoutingPath from "../../routes/RoutingPath";

export const Button = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const history = useHistory();
  const [authenticatedUser] = useContext(UserContext);
  const displayUserIfAuthenticated = () => {
    return authenticatedUser ? (
      <div className="profile">
        <Profile />
      </div>
    ) : (
      <li>
        <Link to={RoutingPath.signInView} onClick={closeMobileMenu}>
          Sign in
        </Link>
      </li>
    );
  };
  return (
    <Link to={RoutingPath.signInView}>
      <button onClick={closeMobileMenu} className="btn">
        {displayUserIfAuthenticated()}
      </button>
    </Link>
  );
};
