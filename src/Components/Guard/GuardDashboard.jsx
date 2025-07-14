import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../Navbar';
import './style.css';

const GuardDashboard = () => {
  const [vehicles, setVehicles] = useState([]);
  const [occupiedSlots, setOccupiedSlots] = useState(0);
  const totalSlots = 200;
  const availableSlots = totalSlots - occupiedSlots;

  useEffect(() => {
    axios.get('http://localhost:5000/api/vehicles')
      .then((res) => {
        setVehicles(res.data);
        setOccupiedSlots(res.data.length);
      })
      .catch((err) => {
        console.error("Error fetching current vehicles:", err);
      });
  }, []);

  const containerStyle = {
    marginLeft: window.innerWidth <= 768 ? '0px' : 'auto',
    marginRight: window.innerWidth <= 768 ? '0px' : 'auto',
    paddingLeft: window.innerWidth <= 768 ? '10px' : '15px',
    paddingRight: window.innerWidth <= 768 ? '10px' : '15px',
    maxWidth: window.innerWidth <= 768 ? '100%' : '1140px',
    boxSizing: 'border-box',
  };

  return (
    <div>
      <Navbar />
      <div className="container my-5" style={containerStyle}>
        <h1 className="fw-bold main-title mb-4 ms-5">Welcome</h1>

        {/* Cards */}
        <div className="row mb-2 g-3 ms-5">
          {[{
            title: 'Total Slots',
            value: totalSlots
          }, {
            title: 'Occupied',
            value: occupiedSlots
          }, {
            title: 'Available',
            value: availableSlots
          }].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card border-custom outline-card enhanced-card">
                <div className="card-body text-custom">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text fs-4">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table of Current Vehicles */}
        <div className="card mb-4 ms-5 shadow-card">
          <div className="card-body">
            <h5 className="card-title mb-3">Currently Parked Vehicles</h5>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Vehicle Number</th>
                    <th>Owner</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.length === 0 ? (
                    <tr>
                      <td colSpan="2" className="text-center">No vehicles currently parked</td>
                    </tr>
                  ) : (
                    vehicles.map((v, i) => (
                      <tr key={v._id || i}>
                        <td>{v.vehicle_number || 'N/A'}</td>
                        <td>{v.owner_name || 'N/A'}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuardDashboard;
