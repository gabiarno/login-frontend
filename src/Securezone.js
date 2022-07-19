import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Securezone = ({ isAuth }) => {
  const navigate = useNavigate();

  console.log("isAuth in securezone",isAuth);
  useEffect(() => {
    if (isAuth === false) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return (
    <>
      <h1>Welcome!</h1>

      <div>
        You are in a secure zone!
      </div>
    </>
  );
};

export default Securezone;