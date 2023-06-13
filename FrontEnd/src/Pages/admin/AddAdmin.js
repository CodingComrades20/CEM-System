import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddAdmin() {
  let navigate = useNavigate();

  const [admin, setAdmin] = useState({
    username: '',
    email: '',
    country: '',
  });

  const { username, email, country } = admin;
  const [errors, setErrors] = useState({});

  const onInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      await axios.post('http://localhost:8081/admins', admin);
      navigate('/admin');
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!username) {
      errors.username = 'Username is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    }

    if (!country) {
      errors.country = 'Country is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return false;
    }

    return true;
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Add Admin</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>
                Username
              </label>
              <input
                type='text'
                className={`form-control ${errors && errors.username && 'is-invalid'}`}
                placeholder='Enter Username'
                name='username'
                value={username}
                onChange={(e) => onInputChange(e)}
                required
              />
              {errors && errors.username && (
                <div className='invalid-feedback' style={{ color: 'red' }}>
                  {errors.username}
                </div>
              )}
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className={`form-control ${errors && errors.email && 'is-invalid'}`}
                placeholder='Enter Email'
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
              {errors && errors.email && (
                <div className='invalid-feedback' style={{ color: 'red' }}>
                  {errors.email}
                </div>
              )}
            </div>
            <div className='mb-3'>
              <label htmlFor='country' className='form-label'>
                Country
              </label>
              <input
                type='text'
                className={`form-control ${errors && errors.country && 'is-invalid'}`}
                placeholder='Enter Country'
                name='country'
                value={country}
                onChange={(e) => onInputChange(e)}
                required
              />
              {errors && errors.country && (
                <div className='invalid-feedback' style={{ color: 'red' }}>
                  {errors.country}
                </div>
              )}
            </div>
            <button type='submit' className='btn btn-outline-primary'>
              Submit
            </button>
            <Link className='btn btn-outline-danger mx-2' to='/'>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
