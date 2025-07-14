import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user data or token from localStorage
    localStorage.removeItem('token'); // ya jo bhi aapka key ho
    localStorage.removeItem('adminInfo'); // agar koi aur info stored hai

    // Redirect to login page after logout
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <h2>You have been logged out successfully!</h2>
    </div>
  );
};

export default Logout;
