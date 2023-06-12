import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewOrganization() {
  const [organization, setOrganization] = useState({
    organizationName: '',
    address: '',
    country: '',
    phoneNumber: '',
    email: '',
  });

  const { id } = useParams();

  useEffect(() => {
    loadOrganization();
  }, []);

  const loadOrganization = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/organization/${id}`);
      setOrganization(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Organization Details</h2>

          <div className="card">
            <div className="card-header">
              Details of organization ID: {id}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Organization Name:</b> {organization.organizationName}
              </li>
              <li className="list-group-item">
                <b>Address:</b> {organization.address}
              </li>
              <li className="list-group-item">
                <b>Country:</b> {organization.country}
              </li>
              <li className="list-group-item">
                <b>Phone Number:</b> {organization.phoneNumber}
              </li>
              <li className="list-group-item">
                <b>Email:</b> {organization.email}
              </li>
            </ul>
          </div>
          <Link className="btn btn-primary my-2" to="/organization">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
