import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './Style.css';

const Logoutg = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Token ya user data ko remove karo yh hoga 
    localStorage.removeItem('token'); // ya jo bhi naam diya ho
    localStorage.removeItem('user');  // optional

    // 2. Redirect to login page after short delay yh bhi
    setTimeout(() => {
      navigate('/login'); // Change this if your login route is different
    }, 2000); // 2 sec ka delay to show message
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <h2 className='text-center mt-5'></h2>
    </div>
  );
};

export default Logoutg;
