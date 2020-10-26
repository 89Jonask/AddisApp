import React, { useContext } from "react";
import "./NavigationBar.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../shared/global/provider/UserProvider";
import { Profile } from "../profile/Profile";

export const NavigationBar = () => {
  const history = useHistory();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const displayUserIfAuthenticated = () => {
    return authenticatedUser ? (
      <div className="profile">
        <Profile />
      </div>
    ) : (
      <a onClick={() => history.push("/signin")} href="signin">
        Sign in
      </a>
    );
  };

  return (
    <div className="navigationBarWrapper">
      <div className="navigationBar">
        <a onClick={() => history.push("/")} href="home">
          Home
        </a>
        <a onClick={() => history.push("/about")} href="about">
          About
        </a>
        <a href="#contact">Contact</a>
        {displayUserIfAuthenticated()}
      </div>
    </div>
  );
};
