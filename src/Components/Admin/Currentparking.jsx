import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../Navbar';
import './styles.css';

const Currentparking = () => {
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
        <h1 className="fw-bold main-title mb-4">Welcome</h1>

        {/* Cards */}
        <div className="row mb-4 g-3">
  <div className="col-md-4">
    <div className="card enhanced-card">
      <div className="card-body text-center">
        <h5 className="card-title">Total Slots</h5>
        <p className="card-text">{totalSlots}</p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card enhanced-card">
      <div className="card-body text-center">
        <h5 className="card-title">Occupied</h5>
        <p className="card-text">{occupiedSlots}</p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card enhanced-card">
      <div className="card-body text-center">
        <h5 className="card-title">Available</h5>
        <p className="card-text">{availableSlots}</p>
      </div>
    </div>
  </div>
</div>


        {/* Table of Current Vehicles */}
        <div className="card mb-4 shadow-card">
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
                      <td colSpan="3" className="text-center">No vehicles currently parked</td>
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

              {/* Responsive style adjustment */}
      <style>
        {`
          @media (max-width: 738px) {
            div[style*="margin-left"] {
              margin-left: 0 !important;
              padding: 45px !important;
             
            }
          }
        `}
      </style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currentparking;
