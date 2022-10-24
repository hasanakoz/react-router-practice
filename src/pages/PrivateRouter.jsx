import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const userAuthenticated = false;

  return <div>{userAuthenticated ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
