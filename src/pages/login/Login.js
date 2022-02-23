import React from "react";
import { useLocation } from "react-router-dom";
import { AppContext, useGlobalState } from "../context";

const Login = () => {
  let location = useLocation();
  const page = location.pathname.replace(/^\/|\/$/g, "");
  console.log(page);
  return <div>Login</div>;
};

export default Login;
