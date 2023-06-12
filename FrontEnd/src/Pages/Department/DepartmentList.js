import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function DepartmentList() {
  const [departments, setDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    const result = await axios.get('http://localhost:8081/departments');
    setDepartments(result.data);
  };

  const deleteDepartment = async (id) => {
    await axios.delete(`http://localhost:8081/department/${id}`);
    loadDepartments();
  };

  useEffect(() => {
    const results = departments.filter(
      (department) =>
        department.departmentName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        department.departmentCode
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, departments]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <div className='d-flex justify-content-between'>
          <h1>Department List</h1>
          <Link
            className='btn btn-dark mx-2'
            to='/addDepartment'
            style={{ height: '40px', width: '150px' }}
          >
            Add Department
          </Link>
        </div>
        <div className='d-flex mb-3'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search by name or code'
            aria-label='Search'
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <table className='table border shadow'>
          <thead>
            <tr>
              <th scope='col'>S.N</th>
              <th scope='col'>Code</th>
              <th scope='col'>Name</th>
              <th scope='col'>Address</th>
              <th scope='col'>No Of Employee</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
  {searchResults.map((department, index) => {
    const originalIndex = departments.findIndex(
      (dept) => dept.id === department.id
    );
    const serialNumber = originalIndex !== -1 ? originalIndex + 1 : '';

    return (
      <tr key={department.id}>
        <th scope='row'>{serialNumber}</th>
        <td>{department.departmentCode}</td>
        <td>{department.departmentName}</td>
        <td>{department.departmentAddress}</td>
        <td>{department.noOfEmployees}</td>
        <td>
          <Link
            className='btn btn-primary mx-2'
            to={`/viewDepartment/${department.id}`}
          >
            View
          </Link>
          <Link
            className='btn btn-outline-primary mx-2'
            to={`/editdepartment/${department.id}`}
          >
            Edit
          </Link>
          <button
            className='btn btn-danger mx-2'
            onClick={() => deleteDepartment(department.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  })}
</tbody>
        </table>
      </div>
    </div>
  );
}
