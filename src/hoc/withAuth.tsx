// src/hoc/withAuth.tsx
import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component: React.ComponentType) => {
  const AuthRoute = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }

    return <Component />;
  };

  return AuthRoute;
};

export default withAuth;
