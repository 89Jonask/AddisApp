import React, { useState } from "react";

export const Signin = () => {
  const [loggedInUser, setLoggedInUser] = useState("Jonatan");
  const [password, setPassword] = useState();

  return (
    <div>
      <span>E-mail</span>
      <input onChange={(event) => setLoggedInUser(event.target.value)} />
      <br />
      <span>Password</span>
      <input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button>Login</button>
    </div>
  );
};
