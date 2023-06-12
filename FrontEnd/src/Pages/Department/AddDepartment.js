import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddDepartment() {
  let navigate = useNavigate();

  const [department, setDepartment] = useState({
    id: '',
    departmentCode: '',
    departmentName: '',
    departmentAddress: '',
    noOfEmployees: '',
  });

  const { departmentCode, departmentName, departmentAddress, noOfEmployees } =
    department;

  const [departments, setDepartments] = useState([]);
  const [errors, setErrors] = useState({}); // Define errors variable

  useEffect(() => {
    const fetchDepartments = async () => {
      const response = await axios.get('http://localhost:8081/departments');
      setDepartments(response.data);
    };

    fetchDepartments();
  }, []);

  const onInputChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Perform validation before submitting the form
    if (validateForm()) {
      await axios.post('http://localhost:8081/department', department);
      navigate('/department');
    }
  };

  const validateForm = () => {
    // Basic validation example
    const errors = {};

    if (!departmentCode) {
      errors.departmentCode = 'Department Code is required';
    }

    if (!departmentName) {
      errors.departmentName = 'Department Name is required';
    }

    if (!departmentAddress) {
      errors.departmentAddress = 'Department Address is required';
    }

    if (!noOfEmployees) {
      errors.noOfEmployees = 'Number of Employees is required';
    }

    // You can add additional custom validation logic here

    if (Object.keys(errors).length > 0) {
      // Display validation errors with red-colored text
      setErrors(errors); // Update errors state
      return false; // Form is invalid
    }

    return true; // Form is valid
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Add Department</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='departmentCode' className='form-label'>
                Department Code
              </label>
              <input
                type='text'
                className={`form-control ${errors && errors.departmentCode && 'is-invalid'}`}
                placeholder='Enter Department Code'
                name='departmentCode'
                value={departmentCode}
                onChange={(e) => onInputChange(e)}
                required
              />
              {errors && errors.departmentCode && (
                <div className='invalid-feedback' style={{ color: 'red' }}>{errors.departmentCode}</div>
              )}
            </div>
            <div className='mb-3'>
              <label htmlFor='departmentName' className='form-label'>
                Department Name
              </label>
              <input
                type='text'
                className={`form-control ${errors && errors.departmentName && 'is-invalid'}`}
                placeholder='Enter Department Name'
                name='departmentName'
                value={departmentName}
                onChange={(e) => onInputChange(e)}
                required
              />
              {errors && errors.departmentName && (
                <div className='invalid-feedback' style={{ color: 'red' }}>{errors.departmentName}</div>
              )}
            </div>
            <div className='mb-3'>
              <label htmlFor='departmentAddress' className='form-label'>
                Address
              </label>
              <input
                type='text'
                className={`form-control ${errors && errors.departmentAddress && 'is-invalid'}`}
                placeholder='Enter your Address'
                name='departmentAddress'
                value={departmentAddress}
                onChange={(e) => onInputChange(e)}
                required
              />
              {errors && errors.departmentAddress && (
                <div className='invalid-feedback' style={{ color: 'red' }}>{errors.departmentAddress}</div>
              )}
            </div>
            <div className='mb-3'>
              <label htmlFor='noOfEmployee' className='form-label'>
                Number of Employees
              </label>
              <input
                type='number'
                className={`form-control ${errors && errors.noOfEmployees && 'is-invalid'}`}
                placeholder='Enter number of employees'
                name='noOfEmployees'
                value={noOfEmployees}
                onChange={(e) => onInputChange(e)}
                required
              />
              {errors && errors.noOfEmployees && (
                <div className='invalid-feedback' style={{ color: 'red' }}>{errors.noOfEmployees}</div>
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
