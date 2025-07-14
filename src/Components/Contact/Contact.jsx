import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vehicleNumber: '',
    description: ''
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Complaint submitted successfully!' });
        setFormData({ name: '', email: '', vehicleNumber: '', description: '' });
      } else {
        setMessage({ type: 'error', text: 'Failed to submit complaint. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-layout">
        
   
        <div className="contact-side">
          <h3>Need Help?</h3>
          <p>Fill out this form and we'll reach out to you as soon as possible.</p>
        </div>

      
        <div className="contact-container">
          <h3 className="contact-title">Contact / Damage Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3 me-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-4 me-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3 me-3">
              <label htmlFor="vehicleNumber" className="form-label">Vehicle Number</label>
              <input
                type="text"
                className="form-control"
                id="vehicleNumber"
                placeholder="Enter vehicle number"
                value={formData.vehicleNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3 ms-4 me-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Describe the issue"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 fw-bold py-2 me-5 ms-3" >Submit Complaint</button>
          </form>

          {/* Message */}
          {message && (
            <div className={`mt-3 alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
              {message.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
