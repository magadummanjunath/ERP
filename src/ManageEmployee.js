import React, { useState, useEffect } from 'react';

const ManageEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    // Fetch employee data from a JSON source (e.g., API endpoint)
    // For this example, we'll simulate fetching data from a JSON file.
    fetch('/employee-data.json') // Replace with your JSON source
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
  };

  const handleUpdate = (index) => {
    // Handle the update logic here
    setEditIndex(-1);
  };

  const handleDelete = (index) => {
    // Handle the delete logic here
  };

  return (
    <div className="container mt-4">
      
      <table className="table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Experience</th>
            <th>Designation</th>
            <th>Manager ID</th>
            <th>Mobile</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.address}</td>
              <td>{employee.pincode}</td>
              <td>{employee.experience}</td>
              <td>{employee.designation}</td>
              <td>{employee.managerId}</td>
              <td>{employee.mobile}</td>
              <td>
                <img
                  src={employee.image}
                  alt={`Employee ${employee.employeeId}`}
                  style={{ maxWidth: '50px' }}
                />
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleUpdate(index)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEmployee;
