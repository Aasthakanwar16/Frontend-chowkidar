import React from 'react';

import { Outlet } from 'react-router-dom';
import SidebarNavbar from './Sidenavbar';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarNavbar />
      <div style={{ marginLeft: '220px', padding: '20px', width: '100%' }}>
        <Outlet />  {/* Yahan admin ke sub routes ka content aayega */}
      </div>
    </div>
  );
};
export default AdminLayout;