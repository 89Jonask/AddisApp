import React from "react";
import "./NavigationBar.css";
import { useHistory } from "react-router-dom";

export const NavigationBar = () => {
  const history = useHistory();

  return (
    <div class="topnav" id="myTopnav">
      <a onClick={() => history.push("/")} class="topnavpage" href="home">
        Home
      </a>
      <a onClick={() => history.push("/about")} href="about">
        About
      </a>
      <a onClick={() => history.push("/signin")} href="signin">
        Sign in
      </a>
      <a href="#contact">Contact</a>
    </div>
  );
};
