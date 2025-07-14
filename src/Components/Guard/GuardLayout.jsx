import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const GuardLayout = () => {
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="flex-grow-1 p-3 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default GuardLayout;
