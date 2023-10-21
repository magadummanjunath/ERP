import React, { useState, useEffect } from 'react';

const ManageEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    // Sample employee data (including Base64 image)
    const sampleEmployeeData = [
      {
        employeeId: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        address: '123 Main St',
        pincode: '12345',
        experience: 5,
        designation: 'Manager',
        managerId: 101,
        mobile: '123-456-7890',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCB...your_encoded_image_here...',
      },
      // Add more sample employees as needed
    ];

    setEmployees(sampleEmployeeData);
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
    setImageFile(null);
  };

  const handleUpdate = (index) => {
    // Handle the update logic here
    // You can update the employee data, including the image, here
    setEditIndex(-1);
    setImageFile(null);
  };

  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const handleFieldChange = (index, field, value) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index][field] = value;
    setEmployees(updatedEmployees);
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
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={employee.employeeId}
                    onChange={(e) => handleFieldChange(index, 'employeeId', e.target.value)}
                  />
                ) : (
                  employee.employeeId
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={employee.name}
                    onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                  />
                ) : (
                  employee.name
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={employee.email}
                    onChange={(e) => handleFieldChange(index, 'email', e.target.value)}
                  />
                ) : (
                  employee.email
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={employee.address}
                    onChange={(e) => handleFieldChange(index, 'address', e.target.value)}
                  />
                ) : (
                  employee.address
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={employee.pincode}
                    onChange={(e) => handleFieldChange(index, 'pincode', e.target.value)}
                  />
                ) : (
                  employee.pincode
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={employee.experience}
                    onChange={(e) => handleFieldChange(index, 'experience', e.target.value)}
                  />
                ) : (
                  employee.experience
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={employee.designation}
                    onChange={(e) => handleFieldChange(index, 'designation', e.target.value)}
                  />
                ) : (
                  employee.designation
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={employee.managerId}
                    onChange={(e) => handleFieldChange(index, 'managerId', e.target.value)}
                  />
                ) : (
                  employee.managerId
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={employee.mobile}
                    onChange={(e) => handleFieldChange(index, 'mobile', e.target.value)}
                  />
                ) : (
                  employee.mobile
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                ) : (
                  <img
                    src={employee.image}
                    alt={`Employee ${employee.employeeId}`}
                    style={{ maxWidth: '50px' }}
                  />
                )}
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
