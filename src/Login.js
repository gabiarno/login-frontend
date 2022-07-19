import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginInfo, setLoginInfo] = useState({});


  useEffect(() => {
    if (loginInfo.isAuthenticated) {
        console.log("loginInfo",loginInfo);
      window.sessionStorage.setItem("auth", JSON.stringify(loginInfo));
      setAuth(true);
      navigate("/");
    }
  }, [loginInfo, navigate, setAuth]);

  const loginSubmit = () => {
    const data = { email, password };
    console.log("test");
    console.log("data",data);

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
        <input id="username" type="text" name="email" value={email} 
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