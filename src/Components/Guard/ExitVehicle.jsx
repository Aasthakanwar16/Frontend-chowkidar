import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import { API_URL } from '../../config/api';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure this is available

const ExitVehicle = () => {
  const [entries, setEntries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [selectedLogId, setSelectedLogId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/vehicles`);
        setEntries(res.data);
        setFilteredEntries(res.data);
      } catch (err) {
        console.error('Failed to fetch entries:', err);
      }
    };
    fetchData();
  }, []);

  const confirmExit = async () => {
    try {
      await axios.delete(`${API_URL}/vehicles/${selectedLogId}`);
      setEntries((prev) => prev.filter((entry) => entry._id !== selectedLogId));
      setFilteredEntries((prev) => prev.filter((entry) => entry._id !== selectedLogId));
    } catch (error) {
      console.error('Error deleting vehicle entry:', error);
    }
  };

  const handleSearch = () => {
    const results = entries.filter((entry) =>
      entry.vehicle_number.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredEntries(results);
  };

  return (
    <div className="container-fluid mt-5 px-4 me-5 exit-bg ">
      <div className="row">
        <div className="col-md-3 mb-4">
          <Navbar />
        </div>

        <div className="col-md-9 me-0">
          <div className="custom-card p-4 me-5">
            <h3 className="text-center mb-4 panel-title">Exit Vehicle Panel</h3>

            <div className="d-flex flex-column flex-sm-row gap-2 mb-4   me-3 justify-content-center">
              <input
                type="text"
                className="form-control shadow-sm"
                placeholder="Search by vehicle number"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="btn btn-outline-dark search-btn px-4" onClick={handleSearch}>
                Search
              </button>
            </div>

            {filteredEntries.length > 0 ? (
              <div className="table-responsive rounded-3 ms-5">
                <table className="table table-hover text-center align-middle table-borderless exit-table">
                  <thead>
                    <tr className="table-header">
                      <th>Vehicle Number</th>
                      <th>Owner Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEntries.map((entry) => (
                      <tr key={entry._id}>
                        <td>{entry.vehicle_number}</td>
                        <td>{entry.owner_name}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger delete-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                            onClick={() => setSelectedLogId(entry._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center mt-4 text-muted">
                No active vehicle entries found.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Beautiful Modal */}
      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4 animate-scale">
            <div
              className="modal-header bg-gradient text-white rounded-top-4 px-4 py-3"
              style={{ background: 'linear-gradient(to right, #ff416c, #ff4b2b)' }}
            >
              <h5 className="modal-title fw-bold">
                <i className="bi bi-exclamation-triangle-fill me-2"></i> Confirm Deletion
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center px-5 pt-4">
              <i className="bi bi-trash-fill text-danger display-4 mb-3"></i>
              <p className="fs-5">Are you sure you want to remove this vehicle log?</p>
              <p className="text-muted small">This action <strong>cannot be undone</strong>.</p>
            </div>
            <div className="modal-footer justify-content-center pb-4">
              <button className="btn btn-light border px-4 me-3" data-bs-dismiss="modal">
                Cancel
              </button>
              <button className="btn btn-danger px-4" onClick={confirmExit} data-bs-dismiss="modal">
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitVehicle;
