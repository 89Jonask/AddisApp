import React, { useState, useContext } from "react";
import { UserContext } from "../../shared/global/provider/UserProvider";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";

export const SigninView = () => {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [authenicatedUser, setAuthenticatedUser] = useContext(UserContext);

  const login = () => {
    setAuthenticatedUser(username);
    localStorage.setItem("username", username);
    history.push(RoutingPath.homeView);
  };

  return (
    <div>
      <span>Username</span>
      <input onChange={(event) => setUsername(event.target.value)} />
      <br />
      <span>Password</span>{" "}
      <input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button onClick={() => login()}>Login</button>
    </div>
  );
};
