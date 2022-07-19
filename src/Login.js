import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginInfo, setLoginInfo] = useState({});


  useEffect(() => {
    if (loginInfo.isAuthenticated) {
      window.sessionStorage.setItem("auth", JSON.stringify(loginInfo));
      setAuth(true);
      navigate("/");
    }
  }, [loginInfo, navigate, setAuth]);

  const loginSubmit = () => {
    const data = { username, password };

    fetch("http://localhost:4000/user/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoginInfo(data);
      });
  };

  return (
    <div>
      <h2>Sign In</h2>
      {loginInfo.error && (
        <p style={{ color: "red" }}>{loginInfo.error}</p>
      )}
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" value={username} 
        onChange={(event) => setUsername(event.target.value)} />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" value={password}
          onChange={(event) => setPassword(event.target.value)} />

        <button onClick={loginSubmit}>Sign In</button>
      </div>
      <a href="signup">Sign Up</a>
    </div>
  );
};

export default Login;