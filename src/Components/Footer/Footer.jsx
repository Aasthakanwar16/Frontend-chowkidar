import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-4 mt-3">
      <div className="container">
        <div className="row">

          {/* About SmartChowkidar */}
          <div className="col-md-3 mb-4">
            <h5>About SmartChowkidar</h5>
            <p>
              <strong>SmartChowkidar</strong> is a tech-enabled parking and surveillance platform that simplifies vehicle entry/exit tracking, complaint management, and real-time space monitoring.
              <br />
              Our mission is to reduce parking chaos and increase transparency in gated communities, apartments, and city lots.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <p><strong>Address:</strong> 123, Smart City Road, Jaipur, Rajasthan, India</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@smartchowkidar.com" className="text-light">
                support@smartchowkidar.com
              </a>
            </p>
          </div>

          {/* Key Features */}
          <div className="col-md-3 mb-4">
            <h5>Key Features</h5>
            <ul className="list-unstyled">
              <li>✅ Real-time Vehicle Logs</li>
              <li>✅ Parking Slot Availability</li>
              <li>✅ Exit Tracking & Alerts</li>
              <li>✅ Complaint Submission Panel</li>
              <li>✅ Admin/Guard Login Dashboard</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/services" className="text-light">Services</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
              <li><a href="/faq" className="text-light">FAQ</a></li>
              <li><a href="/privacy-policy" className="text-light">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mb-3">
          <a 
            href="https://instagram.com" 
            className="text-light me-3 fs-4" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a 
            href="https://youtube.com" 
            className="text-light fs-4" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>

        <hr className="border-light" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} SmartChowkidar. All rights reserved.</p>
          <p className="small">Designed to simplify and secure parking management in modern communities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
