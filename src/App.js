import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import HrDashboard from './HrDashboard';
import AddEmployee from './AddEmployee';
import ManageEmployee from './ManageEmployee';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/login" element={<><h1>Login Page</h1><LoginForm /></>} />
            <Route path="/registration" element={<><h1>Registration Page</h1><RegistrationForm /></>} />
            <Route path="/hrdashboard" element={<><h1>HR Dashboard</h1><HrDashboard/></>}/>
            <Route path="/addemployee" element={<><h1>Add Employee</h1><AddEmployee/></>}/>
            <Route path="/manageemployee" element={<><h1>Manage Employee</h1><ManageEmployee/></>}/>


            {/* Default route */}
            <Route path="/" element={<><h1>Login Page</h1><LoginForm /></>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
