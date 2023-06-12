import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function OrganizationList() {
  const [organizations, setOrganizations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    loadOrganizations();
  }, []);

  const loadOrganizations = async () => {
    try {
      const response = await axios.get("http://localhost:8081/organizations");
      setOrganizations(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrganization = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this organization?");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:8081/organization/${id}`);
        loadOrganizations();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const results = organizations.filter(organization =>
      (organization.organizationName && organization.organizationName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (organization.address && organization.address.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (organization.country && organization.country.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (organization.phoneNumber && organization.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (organization.email && organization.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setSearchResults(results);
  }, [searchTerm, organizations]);

  const handleSearchChange = event => {
    const value = event.target.value || '';
    setSearchTerm(value);
  };

  return (
    <div className="container">
      <div className="py-4" style={{ marginTop: '50px' }}>
        <div className="d-flex justify-content-between">
          <h1 style={{ marginBottom: '20px' }}>Organization List</h1>
          <Link className="btn btn-dark mx-2" to="/addorganization" style={{ height: '40px', width: "150px" }}>
            Add Organization
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
        <div className="organization-list-wrapper">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Organization Name</th>
                <th scope="col">Address</th>
                <th scope="col">Country</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((organization, index) => (
                <tr key={organization.id}>
                  <th scope="row">{organization.id}</th>
                  <td>{organization.organizationName}</td>
                  <td>{organization.address}</td>
                  <td>{organization.country}</td>
                  <td>{organization.phoneNumber}</td>
                  <td>{organization.email}</td>
                  <td>
                    <Link className="btn btn-primary mx-2" to={`/viewOrganization/${organization.id}`}>
                      View
                    </Link>
                    <Link className="btn btn-outline-primary mx-2" to={`/editOrganization/${organization.id}`}>
                      Edit
                    </Link>
                    <button className="btn btn-danger mx-2" onClick={() => deleteOrganization(organization.id)}>
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
