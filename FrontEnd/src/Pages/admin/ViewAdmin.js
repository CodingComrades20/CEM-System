import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewAdmin() {
  const [admin, setAdmin] = useState({
    id: '',
    username: '',
    email: '',
    country: '',
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchAdmin = async () => {
      const response = await axios.get(`http://localhost:8081/admins/${id}`);
      setAdmin(response.data);
    };

    fetchAdmin();
  }, [id]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Admin Details</h2>

          <div className='card'>
            <div className='card-header'>
              Details of Admin ID: {admin.id}
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <b>Username:</b> {admin.username}
              </li>
              <li className='list-group-item'>
                <b>Email:</b> {admin.email}
              </li>
              <li className='list-group-item'>
                <b>Country:</b> {admin.country}
              </li>
            </ul>
          </div>
          <Link className='btn btn-primary my-2' to='/adminList'>
            Back to Admin List
          </Link>
        </div>
      </div>
    </div>
  );
}
