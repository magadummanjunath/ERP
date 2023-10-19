import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddEmployee from './AddEmployee';
import ManageEmployee from './ManageEmployee';

const HrDashboard = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const selectPage = (page) => {
    setSelectedPage(page);
  };

  return (
    <div>
      {/* Fixed navigation bar with dark gray background */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="#" className="nav-link" onClick={() => selectPage('addemployee')}>
                  Add Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" onClick={() => selectPage('manageemployee')}>
                  Manage Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" onClick={() => selectPage('checkattendance')}>
                  Check Attendance
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" onClick={() => selectPage('leaveapplication')}>
                  Leave Application
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" onClick={() => selectPage('salaryslip')}>
                  Salary Slip
                </Link>
              </li>
            </ul>
            <Link to="/login" className="btn btn-outline-danger ms-auto">Logout</Link>
          </div>
        </div>
      </nav>

      {/* Content area */}
      <div className="container mt-4">
        {selectedPage ? (
          selectedPage === 'addemployee' ? (
            <AddEmployee />
          ) : selectedPage === 'manageemployee' ? (
            <ManageEmployee />
          ) : null
        ) : (
          <>
            <h1 className="mt-4">Welcome to HR Dashboard</h1>
            <p>Select a section from the navigation to get started.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default HrDashboard;
