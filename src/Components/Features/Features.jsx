import React from 'react';
import './Features.css';

const featuresData = [
  {
    icon: 'bi-map-fill',
    title: 'Real-time Parking Tracking',
    description: 'Monitor live parking space availability with accuracy.',
  },
  {
    icon: 'bi-journal-text',
    title: 'Vehicle Entry/Exit Logs',
    description: 'Automatically record every vehicle that enters or leaves.',
  },
  {
    icon: 'bi-alarm-fill',
    title: 'Long-Stay Alerts',
    description: 'Get notified if a vehicle overstays beyond allowed time.',
  },
  {
    icon: 'bi-door-closed-fill',
    title: 'Automated Gate Control',
    description: 'Control gates smartly and reduce manual guard duties.',
  },
  {
    icon: 'bi-speedometer2',
    title: 'Admin Dashboard',
    description: 'Track, manage, and report everything from one place.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Multi-layer Security',
    description: 'Face recognition, OTP, and guard logs ensure safety.',
  },
];

const Features = () => {
  return (
    <div id="features" className="container my-5">
      <h2 className="text-center fw-bold mb-4">Our Smart Features</h2>
      <p className="text-center text-muted mb-5">
        Designed to make your campus parking secure and seamless.
      </p>
      <div className="row g-4">
        {featuresData.map((feature, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="feature-card h-100 p-4 text-center rounded shadow-sm">
              <div className="icon mb-3 text-primary">
                <i className={`bi ${feature.icon} fs-1`}></i>
              </div>
              <h5 className="fw-semibold">{feature.title}</h5>
              <p className="text-muted">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
