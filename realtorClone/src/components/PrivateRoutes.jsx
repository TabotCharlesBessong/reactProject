import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Spinner } from "../components";
import { useAuthStatus } from "../hooks/useAuthStatus";

const PrivateRoutes = () => {
  // const loggedIn = false
  const { loading, loggedIn } = useAuthStatus();
  console.log({ loading, loggedIn });
  if (loading) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
