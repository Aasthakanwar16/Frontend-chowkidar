import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);

  // Fetch complaints
  const fetchComplaints = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/complaints');
      const data = await response.json();
      setComplaints(data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  // Delete complaint
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this complaint?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/complaints/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setComplaints(prev => prev.filter(c => c._id !== id));
      } else {
        alert("Failed to delete complaint");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting complaint");
    }
  };

  return (
    <>
      <Navbar />
      <div 
        style={{
          marginLeft: '250px',
          padding: '20px',
          minHeight: '100vh',
          backgroundColor: '#f4f8fb'
        }}
        className="container-fluid"
      >
        <h3 className="mb-5 py-3 text-center" style={{ color: '#2B6777' }}>
          Submitted Complaints
        </h3>

        {complaints.length === 0 ? (
          <p className="text-center fs-5">No complaints submitted yet.</p>
        ) : (
          <div className="row gy-4">
            {complaints.map((complaint) => (
              <div key={complaint._id} className="col-12 col-md-6 col-lg-4">
                <div
                  className="card shadow-sm h-100 border-start border-4"
                  style={{ borderColor: '#2B6777', backgroundColor: '#ffffff' }}
                >
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title" style={{ color: '#2B6777' }}>
                       {complaint.name}
                    </h5>
                    <p className="card-text mb-1"><strong>📧 Email:</strong> {complaint.email}</p>
                    <p className="card-text mb-1"><strong>🚗 Vehicle No:</strong> {complaint.vehicleNumber}</p>
                    <p className="card-text mb-3"><strong>📄 Description:</strong> {complaint.description}</p>
                    <p className="card-text text-muted small mt-auto">
                      🕒 {new Date(complaint.createdAt).toLocaleString()}
                    </p>
                    <button
                      onClick={() => handleDelete(complaint._id)}
                      className="btn mt-3 ms-1"
                      style={{
                        backgroundColor: '#2B6777',
                        color: '#fff',
                        border: 'none'
                      }}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Responsive Design Fix */}
      <style>
        {`
          @media (max-width: 738px) {
            div[style*="margin-left"] {
              margin-left: 0 !important;
              padding: 40px !important;
            }
            .card-body {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default Complaints;
