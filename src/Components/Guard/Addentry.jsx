import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar';
import './Style.css';
import axios from 'axios';
import { API_URL } from '../../config/api';

const Addentry = () => {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    tag: 'Temporary',
    ownerName: '',
    contactNumber: '',
    designation: 'Select',
    vehicleType: 'Select',
    entryTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const now = new Date();
    const formattedTime = now.toISOString();

    const dataToSend = {
      vehicle_number: formData.vehicleNumber,
      tag: formData.tag,
      owner_name: formData.ownerName,
      contact_number: formData.contactNumber,
      designation: formData.designation,
      vehicle_type: formData.vehicleType,
      entry_time: formattedTime,
    };

    try {
      await axios.post(`${API_URL}/vehicles`, dataToSend);
      alert('Vehicle entry added successfully!');
      handleReset();
    } catch (error) {
      console.error('Error adding vehicle entry:', error.response?.data || error.message);
      alert('Failed to add vehicle entry.');
    }
  };

  const handleReset = () => {
    setFormData({
      vehicleNumber: '',
      tag: 'Temporary',
      ownerName: '',
      contactNumber: '',
      designation: 'Select',
      vehicleType: 'Select',
      entryTime: '',
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="entry-form shadow p-4 rounded-4 mx-auto" style={{ maxWidth: '750px', backgroundColor: '#f9f9f9' }}>
          <h2 className="text-center mb-4 text-primary fw-bold">Vehicle Entry Form</h2>
          <form className="row g-3" onSubmit={handleSubmit} onReset={handleReset}>

            <div className="col-md-6">
              <label className="form-label">Vehicle Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter vehicle number"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Tag</label>
              <select
                className="form-select"
                name="tag"
                value={formData.tag}
                onChange={handleChange}
              >
                <option>Temporary</option>
                <option>Permanent</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Owner Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter owner name"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Contact Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter contact number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Designation</label>
              <select
                className="form-select"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
              >
                <option disabled>Select</option>
                <option>Student</option>
                <option>Staff</option>
                <option>Visitor</option>
                <option>Vendor</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Vehicle Type</label>
              <select
                className="form-select"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                required
              >
                <option disabled>Select</option>
                <option>Two-Wheeler</option>
                <option>Four-Wheeler</option>
                <option>Truck</option>
                <option>Bus</option>
              </select>
            </div>

            <div className="d-flex justify-content-center gap-4 mt-4">
              <button type="submit" className="btn btn-primary px-4">Submit</button>
              <button type="reset" className="btn btn-outline-secondary px-4">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addentry;
