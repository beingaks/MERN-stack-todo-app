import { Navigate, Outlet } from "react-router-dom";
import React from "react";
const PrivateComponent = () => {
  const Auth = localStorage.getItem("user");
  return Auth ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateComponent;
