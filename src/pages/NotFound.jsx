import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);
  return (
    // <Navigate to="/" />
    <h1>Not Found</h1>
  );
};

export default NotFound;

// Navigate Component it will automatically redirect you to another page immediately
// use navigate hooks will help you to the location you want to go and it will replace and state property
// it takes no property but returns us the function
// navigate function takes two property one replace ad the other one is state
