import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaCarAlt, FaHistory, FaUserShield, FaSignOutAlt } from 'react-icons/fa';
import './Sidenavbar.css'; // <-- Import your CSS file

const SidebarNavbar = () => {
  const location = useLocation();

  const links = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
  { to: '/admin/Complaints', label: 'Complaints', icon: <FaCarAlt /> },
    { to: '/admin/vehicle-history', label: 'Vehicle History', icon: <FaHistory /> },
    { to: '/admin/guards', label: 'Guards Management', icon: <FaUserShield /> },
    { to: '/admin/logout', label: 'Logout', icon: <FaSignOutAlt /> },
  ];

  return (
    <div
      className="d-flex flex-column bg-dark text-white p-3 sidebar-container"
    >
      <h4 className="text-center mb-4 border-bottom pb-2 sidebar-title">Admin Panel</h4>

      <Nav className="flex-column gap-2">
        {links.map(({ to, label, icon }) => {
          const isActive = location.pathname === to;
          const baseClasses = 'nav-link rounded d-flex align-items-center gap-2';
          const activeClasses = isActive ? 'bg-primary text-white' : 'text-white';

          return (
            <Nav.Link
              as={Link}
              to={to}
              key={to}
              className={`${baseClasses} ${activeClasses}`}
            >
              {icon}
              <span className="link-label">{label}</span>
            </Nav.Link>
          );
        })}
      </Nav>
    </div>
  );
};

export default SidebarNavbar;
