import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import 'bootstrap/dist/css/bootstrap.min.css';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace with your actual user data
    const registeredUsers = [
      { email: 'user1@example.com', password: 'password1' },
      { email: 'user2@example.com', password: 'password2' },
    ];

    const foundUser = registeredUsers.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (foundUser) {
      // Successful login
      setLoginSuccess(true);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
<div className="container d-flex justify-content-center align-items-center min-vh-100">
  <div className="border p-4 rounded">
    <div className="w-full max-w-xs mx-auto">
      <form className="bg-white shadow p-4 rounded mb-4" onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-primary"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <Link to="/registration" className="text-primary text-decoration-underline">Register here</Link>
      {/* Display a success message after login */}
      {loginSuccess && (
        <p className="text-success text-center">  
          Login successful. 
          <Link to="/registration" className="text-primary text-decoration-underline">Register</Link>
        </p>
      )}
    </div>
  </div>
</div>

  
  );
};

export default LoginForm;
