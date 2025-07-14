import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import Navbar from '../Navbar';
import axios from 'axios';

const Guardsmang = () => {
  const [guards, setGuards] = useState([]);
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentGuardId, setCurrentGuardId] = useState(null);

  const [newGuard, setNewGuard] = useState({
    name: '',
    contact: '',
    email: '',
    shift_time: '',
    login_id: '',
    password: '',
    status: 'active',
  });

  useEffect(() => {
    fetchGuards();
  }, []);

  const fetchGuards = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/guards');
      console.log("Guards from server:", res.data);  // Debugging
      setGuards(res.data);
    } catch (err) {
      console.error('Failed to fetch guards:', err);
    }
  };

  const handleShow = () => {
    setEditMode(false);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setNewGuard({
      name: '',
      contact: '',
      email: '',
      shift_time: '',
      login_id: '',
      password: '',
      status: 'active',
    });
    setCurrentGuardId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGuard(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`http://localhost:5000/api/guards/${currentGuardId}`, newGuard);
      } else {
        await axios.post('http://localhost:5000/api/guards', newGuard);
      }
      fetchGuards();
      handleClose();
    } catch (error) {
      alert("Failed: " + (error.response?.data?.error || error.message));
    }
  };

  const handleEdit = (guard) => {
    setEditMode(true);
    setCurrentGuardId(guard._id);
    setNewGuard(guard);
    setShow(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this guard?")) {
      try {
        await axios.delete(`http://localhost:5000/api/guards/${id}`);
        fetchGuards(); // Fetch updated list
      } catch (error) {
        alert("Failed to delete: " + error.message);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-3">Guards Management</h2>
        <Button variant="primary" className="mb-3" onClick={handleShow}>
          Add New Guard
        </Button>

        <div className="table-responsive shadow-sm rounded">
          <Table striped bordered hover className="mb-4">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Shift</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {guards.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">No guards available</td>
                </tr>
              ) : (
                guards.map((guard) => (
                  <tr key={guard._id}>
                    <td>{guard.name}</td>
                    <td>{guard.contact}</td>
                    <td>{guard.email}</td>
                    <td>{guard.shift_time}</td>
                    <td>{guard.status}</td>
                    <td>
                      <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(guard)}>
                        Edit
                      </Button>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(guard._id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{editMode ? 'Edit Guard' : 'Add New Guard'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              {['name', 'contact', 'email', 'shift_time', 'login_id', 'password'].map(field => (
                <Form.Group className="mb-3" controlId={`form${field}`} key={field}>
                  <Form.Label>{field.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</Form.Label>
                  <Form.Control
                    type={field === 'password' ? 'password' : 'text'}
                    name={field}
                    value={newGuard[field]}
                    onChange={handleChange}
                    required
                    placeholder={`Enter ${field.replace('_', ' ')}`}
                  />
                </Form.Group>
              ))}
              <Button type="submit" variant="success" className="w-100">
                {editMode ? 'Update Guard' : 'Save'}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>

     
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
  );
};

export default Guardsmang;

