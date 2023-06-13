import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function EditAdmin() {
  const { id } = useParams();
  const history = useHistory();

  const [admin, setAdmin] = useState({
    username: '',
    email: '',
    country: '',
  });

  const { username, email, country } = admin;

  useEffect(() => {
    loadAdmin();
  }, []);

  const loadAdmin = async () => {
    const result = await axios.get(`http://localhost:8081/admins/${id}`);
    setAdmin(result.data);
  };

  const onInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/admins/${id}`, admin);
    history.push('/adminList');
  };

  return (
    <div className='container'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Edit Admin</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Username'
              name='username'
              value={username}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control form-control-lg'
              placeholder='Enter Email'
              name='email'
              value={email}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Country'
              name='country'
              value={country}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <button className='btn btn-primary btn-block'>Update Admin</button>
        </form>
      </div>
    </div>
  );
}
