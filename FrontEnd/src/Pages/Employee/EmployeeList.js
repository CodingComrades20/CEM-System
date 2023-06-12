import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8081/employees");
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this employee?");
    if (confirmed) {
      try {
        await axios.put(`http://localhost:8081/employee/${id}`, { deleted: true });
        loadEmployees();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const results = employees.filter(employee =>
      (employee.firstName && employee.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (employee.lastName && employee.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (employee.email && employee.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (employee.phone && employee.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (employee.city && employee.city.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setSearchResults(results);
  }, [searchTerm, employees]);

  const handleSearchChange = event => {
    const value = event.target.value || '';
    setSearchTerm(value);
  };

  return (
    <div className="container">
      <div className="py-4" style={{ marginTop: '50px' }}>
        <div className="d-flex justify-content-between">
          <h1 style={{ marginBottom: '20px' }}>Employee List</h1>
          <Link className="btn btn-dark mx-2" to="/addemployee" style={{ height: '40px', width: "150px" }}>
            Add Employee
          </Link>
        </div>
        <div className="d-flex mb-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search by name"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="employee-list-wrapper" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">City</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((employee, index) => (
                <tr key={employee.id}>
                  <th scope="row">{employee.id}</th>
                  <td>
                    {employee.firstName} {employee.lastName}
                  </td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.city}</td>
                  <td>
                    <Link className="btn btn-primary mx-2" to={`/viewEmployee/${employee.id}`}>
                      View
                    </Link>
                    <Link className="btn btn-outline-primary mx-2" to={`/editemployee/${employee.id}`}>
                      Edit
                    </Link>
                    <button className="btn btn-danger mx-2" onClick={() => deleteEmployee(employee.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
