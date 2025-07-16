import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login() {
  const [role, setRole] = useState('guard');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
const url =
  role === 'admin'
    ? 'http://localhost:5000/api/auth/admin/login'
    : 'http://localhost:5000/api/guard-auth/login'; 
    const data =
      role === 'admin'
        ? { email: username, password }
        : { login_id: username, password };

    try {
      const response = await axios.post(url, data);

      if (response.data.token) {
        setMessage('Login successful!');

        // Store token and role
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);

        // Redirect
        navigate(role === 'admin' ? '/admin/dashboard' : '/guard/dashboard');
      } else {
        setMessage('Login failed. Please check credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Error logging in. Please try again.');
    }
  };

{/*  const images = {
  guard: './img/gurd.jpg',
  admin: './img/admin.webp',
};*/}
const images = {
  guard: process.env.PUBLIC_URL + '/img/gurd.jpg',     
  admin: process.env.PUBLIC_URL + '/img/admin.webp',   
};



  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 login-bg">
      <div className="d-flex flex-column flex-md-row w-100 align-items-center justify-content-center gap-4">
        {/* Info Panel */}
        <div className="info-panel text-white text-center px-4 py-3">
          <h2 className="fw-bold">Welcome to Smart Parking</h2>
          <p className="mt-3">
            <strong>Guard:</strong> Track entries & exits<br />
            <strong>Admin:</strong> Manage parking records, users & reports
          </p>
          <p className="fst-italic mt-3">"Safe, Smart & Seamless Parking"</p>
        </div>

        {/* Login Form */}
        <Card className="login-card shadow-lg border-0 p-4">
          <div className="d-flex flex-column align-items-center">
            <div className="login-image text-center mb-3">
              <img
                src={images[role]}
                alt={`${role} preview`}  
                className="img-fluid rounded"
                style={{ maxHeight: '200px', width: 'auto' }}
              />
            </div>

            <div className="login-form w-100">
              <h4 className="mb-4 text-center text-primary">
                Login as {role.charAt(0).toUpperCase() + role.slice(1)}
              </h4>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4 me-4" controlId="formRole">
                  <Form.Label>Select Role</Form.Label>
                  <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="guard">Guard</option>
                    <option value="admin">Admin</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4 me-4" controlId="formUsername">
                  <Form.Label>{role === 'admin' ? 'Email' : 'Username'}</Form.Label>
                  <Form.Control
                    type={role === 'admin' ? 'email' : 'text'}
                    placeholder={role === 'admin' ? 'Enter email' : 'Enter username'}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4 me-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 ms-2">
                  Login
                </Button>
              </Form>

              {message && (
                <Alert variant="info" className="mt-3 text-center">
                  {message}
                </Alert>
              )}
            </div>
          </div>
        </Card>
      </div>
    </Container>
  );
}

export default Login;
