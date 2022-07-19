import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Securezone from "./Securezone";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  const [auth, setAuth] = useState();

  useEffect(() => {
    const authData = JSON.parse(window.sessionStorage.getItem("auth"));
    if (authData && authData.isAuthenticated) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [setAuth]);

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Securezone isAuth={auth} />}></Route>
        <Route path="/login" element={<Login setAuth={setAuth} />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;