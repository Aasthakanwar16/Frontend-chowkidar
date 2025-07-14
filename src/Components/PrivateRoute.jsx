import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

if (location.pathname.startsWith('/admin') && role !== 'admin') {
  return <Navigate to="/login" />;
}

  if (location.pathname.startsWith('/guard') && role !== 'guard') {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
