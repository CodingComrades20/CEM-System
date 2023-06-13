import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

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

  const handleSortChange = event => {
    const { value } = event.target;
    const [key, direction] = value.split(':');
    setSortConfig({ key, direction });
  };

  const sortedEmployees = [...searchResults].sort((a, b) => {
    if (sortConfig.direction === 'ascending') {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return -1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return 1;
      }
      return 0;
    } else if (sortConfig.direction === 'descending') {
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return -1;
      }
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return 1;
      }
      return 0;
    } else {
      return 0;
    }
  });

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
          <select className="form-select" onChange={handleSortChange}>
            <option value="">Sort By</option>
            <option value="firstName:ascending">First Name Ascending</option>
            <option value="firstName:descending">First Name Descending</option>
            <option value="lastName:ascending">Last Name Ascending</option>
            <option value="lastName:descending">Last Name Descending</option>
            <option value="email:ascending">Email Ascending</option>
            <option value="email:descending">Email Descending</option>
            <option value="phone:ascending">Phone Ascending</option>
            <option value="phone:descending">Phone Descending</option>
            <option value="city:ascending">City Ascending</option>
            <option value="city:descending">City Descending</option>
          </select>
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
              {sortedEmployees.map((employee, index) => (
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
