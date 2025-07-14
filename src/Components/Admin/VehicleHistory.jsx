import React, { useState, useEffect } from 'react';  
import { Table, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar';  
import axios from 'axios';   

const VehicleHistory = () => {
  const [history, setHistory] = useState([]);   
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vehicles');
        setHistory(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch vehicle history');
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading vehicle history...</div>;
  if (error) return <div className="text-center text-danger mt-5">{error}</div>;

  return (
    <div>
      <Navbar />
      <Container className="mt-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Vehicle History</h2>
          <p className="text-muted">Recent entry and exit logs</p>
        </div>

        {/* Add this wrapper for horizontal scroll on small screens */}
        <div className="table-responsive shadow-sm rounded">
          <Table striped bordered hover className="mb-4">
            <thead className="table-dark">
              <tr>
                <th>Vehicle No.</th>
                <th>Owner</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {history.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center">No vehicle history available</td>
                </tr>
              ) : (
                history.map((item, index) => (
                  <tr key={index}>
                    <td>{item.number || item.vehicle_number || 'N/A'}</td>
                    <td>{item.owner || item.owner_name || 'N/A'}</td>
                    <td>{item.designation || 'N/A'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </Container>

          <style>
        {`
          @media (max-width: 738px) {
            div[style*="margin-left"] {
              margin-left: 40px !important;
              padding: 45px !important;
             
            }
          }
        `}
      </style>
    </div>
  );
};

export default VehicleHistory;
