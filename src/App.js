import "./App.css";

import { useEffect, useState } from "react";
//import Login from "./Login";
//import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Securezone from "./Securezone";
import Login from "./Login";

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
    
    console.log("en app");
      <Routes>
        <Route path="/" element={<Securezone isAuth={auth} />}></Route>
        <Route path="/login" element={<Login setAuth={setAuth} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

//<Route path="/signup" element={<SignUp />}></Route>
export default App;