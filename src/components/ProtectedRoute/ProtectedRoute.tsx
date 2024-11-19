// src/components/ProtectedRoute.tsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ element: React.ReactNode; path: string }> = ({
  element,
  ...rest
}) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Route
      {...rest}
      element={isLoggedIn ? element : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
