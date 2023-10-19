import React, { useState } from 'react';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    employeeId: '',
    name: '',
    email: '',
    address: '',
    pincode: '',
    experience: '',
    designation: '',
    managerId: '',
    mobile: '',
    image: '',
  });

  const [employees, setEmployees] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Create a new employee object
    const newEmployee = { ...formData };

    // Add the new employee to the existing list of employees
    setEmployees([...employees, newEmployee]);

    // Store the updated employee list in localStorage
    localStorage.setItem('employeeData', JSON.stringify(employees));

    // Clear the form
    setFormData({
      employeeId: '',
      name: '',
      email: '',
      address: '',
      pincode: '',
      experience: '',
      designation: '',
      managerId: '',
      mobile: '',
      image: '',
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="employeeId" className="form-label">
                  Employee ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="employeeId"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="pincode" className="form-label">
                  Pincode
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="experience" className="form-label">
                  Experience
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="designation" className="form-label">
                  Designation
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="managerId" className="form-label">
                  Manager ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="managerId"
                  name="managerId"
                  value={formData.managerId}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-grid gap-2">
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
