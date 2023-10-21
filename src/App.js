import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import HrDashboard from './HrDashboard'; // Import HrDashboard component
import EmployeeDashboard from './EmployeeDashboard'; // Import EmployeeDashboard component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/login" element={<><h1>Login Page</h1><LoginForm /></>} />
            <Route path="/registration" element={<><h1>Registration Page</h1><RegistrationForm /></>} />
            <Route path="/hrdashboard" element={<HrDashboard />} /> {/* Route for HrDashboard */}
            <Route path="/employeedashboard" element={<EmployeeDashboard />} /> {/* Route for EmployeeDashboard */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
