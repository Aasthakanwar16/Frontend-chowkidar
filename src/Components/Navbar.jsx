import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">SmartChowkidar</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"  
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>  {/* Hamburger icon */}
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <HashLink className="nav-link" to="/#home">Home</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#about">About</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#features">Features</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#contact">Contact</HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
