import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="container about-box my-5 py-5 rounded">
    <h2 className="text-center mb-2 fw-bold about-title">About Us</h2>
    <p className="text-center text-muted mb-4 fst-italic">
      Making security smarter, one entry at a time.
    </p>

    <div className="row align-items-center gx-5 login-wrapper">
      <div className="col-md-5 text-center mb-4 mb-md-0 login-image">
       {/* <img
          src="/img/1234.jpg"
          alt="SmartChowkidar"
          className="img-fluid about-img shadow-lg"
        />*/}
        <img
  src="./img/1234.jpg"
  alt="SmartChowkidar"
  className="img-fluid about-img shadow-lg"
/>
      </div>
      <div className="col-md-7 px-3 px-md-4 login-form">
        <p className="lead about-lead mb-4 text-center text-md-start">
          <i className="bi bi-shield-lock-fill me-2 text-primary"></i>
          <strong>SmartChowkidar</strong> is a modern parking management
          system that simplifies vehicle tracking at institutions and workplaces.
        </p>

        <ul className="about-list list-unstyled">
          <li><i className="bi bi-eye me-2 text-success"></i> Real‑time parking space monitoring</li>
          <li><i className="bi bi-journal-text me-2 text-info"></i> Auto‑logs of vehicle entries and exits</li>
          <li><i className="bi bi-alarm-fill me-2 text-danger"></i> Alerts for long‑stay vehicles</li>
          <li><i className="bi bi-person-check-fill me-2 text-primary"></i> Secure, efficient, guard‑friendly interface</li>
        </ul>

        <p className="text-muted mt-4 fst-italic text-center text-md-start">
          “Empowering guards, simplifying entries, and ensuring smarter security every day.”
        </p>
      </div>
    </div>
  </section>
);

export default About;
