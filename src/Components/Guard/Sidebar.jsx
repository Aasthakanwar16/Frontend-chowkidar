import React from 'react';
import './Sidebar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaPlusCircle, 
  FaSignInAlt, 
  FaSignOutAlt 
} from 'react-icons/fa';
import './Sidebar.css';  

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { to: '/guard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { to: '/guard/add-entry', label: 'Add Entry', icon: <FaPlusCircle /> },
    { to: '/guard/exit-vehicle', label: 'Exit', icon: <FaSignInAlt /> },
  { to: '/guard/logout', label: 'Logout', icon: <FaSignOutAlt />, isLogout: true },
  ];

  return (
    <div className="sidebar-container">
      <h4 className="sidebar-title">Guard Panel</h4>
      <nav className="nav flex-column gap-2">
        {links.map(({ to, label, icon, isLogout }) => {
          const isActive = location.pathname === to;
          const baseClasses = 'nav-link rounded d-flex align-items-center gap-2';
          const activeClasses = isActive ? 'bg-primary text-white' : 'text-white';
          const logoutClasses = isLogout ? 'text-danger mt-auto' : '';

          return (
            <NavLink
              to={to}
              key={to}
              className={`${baseClasses} ${activeClasses} ${logoutClasses}`}
              style={{ cursor: isLogout ? 'pointer' : 'default' }}
            >
              {icon}
              <span className="link-label">{label}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
