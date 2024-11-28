import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('authenticated');  // Check if logged in
  return isAuthenticated ? element : <Navigate to="/logins" />;  // Redirect to login if not authenticated
};

export default PrivateRoute;
