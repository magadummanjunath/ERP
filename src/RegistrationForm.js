import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    password: '',
  });
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isEmailUnique = (email) => {
    return !registeredUsers.find((user) => user.email === email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmailUnique(formData.email)) {
      const dobDate = new Date(formData.dob);
      const today = new Date();
      const age = today.getFullYear() - dobDate.getFullYear();

      if (age >= 18) {
        const newUser = {
          name: formData.name,
          email: formData.email,
          dob: formData.dob,
          password: formData.password,
        };

        setRegisteredUsers([...registeredUsers, newUser]);
        setRegistrationSuccess(true);
        setFormData({
          name: '',
          email: '',
          dob: '',
          password: '',
        });
      } else {
        alert('Age must be 18 or older for registration.');
      }
    } else {
      alert('Email address is already registered.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Registration Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">Date of Birth (DOB)</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-3 text-center">
            <Link to="/login" className="text-primary text-decoration-underline">Login here</Link>
          </div>
          {registrationSuccess && (
            <p className="text-success text-center">Registration successful. <Link to="/login" className="text-primary text-decoration-underline">Log in</Link></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
