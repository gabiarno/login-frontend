import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rs, setRs] = useState({});

  const navigate = useNavigate();

  useEffect(()=>{
    if (rs.isAuthenticated) {
      navigate("/login");
    }
  }, [rs, navigate])

  const createForm = () => {
    const data = { name, email, password };
    fetch("http://localhost:4000/user/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((rsData) => {
        setRs(rsData);
      });
  };

  return (
    <>
      <h1>Sign Up</h1>
      {rs.error && (
        <p style={{ color: "red" }}>{rs.error}</p>
      )}
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input type="email"name="email"id="email" value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button onClick={createForm}>Sign Up</button>
      </div>
    </>
  );
};

export default SignUp;