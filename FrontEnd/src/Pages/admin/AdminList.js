import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminList() {
  const [admins, setAdmins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  useEffect(() => {
    loadAdmins();
  }, []);

  const loadAdmins = async () => {
    const result = await axios.get('http://localhost:8081/admins');
    setAdmins(result.data);
  };

  const deleteAdmin = async (id) => {
    await axios.delete(`http://localhost:8081/admins/${id}`);
    loadAdmins();
  };

  useEffect(() => {
    const results = admins.filter(
      (admin) =>
        admin.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        admin.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, admins]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    const { value } = event.target;
    const [key, direction] = value.split(':');
    setSortConfig({ key, direction });
  };

  const sortedAdmins = [...searchResults].sort((a, b) => {
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
    <div className='container'>
      <div className='py-4'>
        <div className='d-flex justify-content-between'>
          <h1>Admin List</h1>
          <Link
            className='btn btn-dark mx-2'
            to='/addAdmin'
            style={{ height: '40px', width: '150px' }}
          >
            Add Admin
          </Link>
        </div>
        <div className='d-flex mb-3'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search by username, email or country'
            aria-label='Search'
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select className="form-select" onChange={handleSortChange}>
            <option value="">Sort By</option>
            <option value="username:ascending">Username Ascending</option>
            <option value="username:descending">Username Descending</option>
            <option value="email:ascending">Email Ascending</option>
            <option value="email:descending">Email Descending</option>
            <option value="country:ascending">Country Ascending</option>
            <option value="country:descending">Country Descending</option>
          </select>
        </div>
        <table className='table border shadow'>
          <thead>
            <tr>
              <th scope='col'>S.N</th>
              <th scope='col'>Username</th>
              <th scope='col'>Email</th>
              <th scope='col'>Country</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedAdmins.map((admin, index) => {
              const originalIndex = admins.findIndex((a) => a.id === admin.id);
              const serialNumber = originalIndex !== -1 ? originalIndex + 1 : '';

              return (
                <tr key={admin.id}>
                  <th scope='row'>{serialNumber}</th>
                  <td>{admin.username}</td>
                  <td>{admin.email}</td>
                  <td>{admin.country}</td>
                  <td>
                    <Link
                      className='btn btn-primary mx-2'
                      to={`/viewAdmin/${admin.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className='btn btn-outline-primary mx-2'
                      to={`/editAdmin/${admin.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className='btn btn-danger mx-2'
                      onClick={() => deleteAdmin(admin.id)}
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
