import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEmployee() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    position: '',
    startDate: '',
    department: ''
  });

  const [departmentList, setDepartmentList] = useState([]);

  const [errors, setErrors] = useState({});

  const { firstName, lastName, email, phone, address, city, position, startDate, department } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEmployee();
    loadDepartmentList();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await axios.put(`http://localhost:8081/employee/${id}`, employee);
      navigate("/employee");
    }
  };

  const loadEmployee = async () => {
    try {
      const result = await axios.get(`http://localhost:8081/employee/${id}`);
      setEmployee(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadDepartmentList = async () => {
    try {
      const result = await axios.get('http://localhost:8081/departments');
      setDepartmentList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (firstName.trim() === '') {
      isValid = false;
      errors.firstName = "First name is required";
    }

    if (lastName.trim() === '') {
      isValid = false;
      errors.lastName = "Last name is required";
    }

    if (email.trim() === '') {
      isValid = false;
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      isValid = false;
      errors.email = "Invalid email format";
    }

    if (phone.trim() === '') {
      isValid = false;
      errors.phone = "Phone number is required";
    } else if (!isValidPhone(phone)) {
      isValid = false;
      errors.phone = "Invalid phone number format";
    }

    if (address.trim() === '') {
      isValid = false;
      errors.address = "Address is required";
    }

    if (city.trim() === '') {
      isValid = false;
      errors.city = "City is required";
    }

    if (position.trim() === '') {
      isValid = false;
      errors.position = "Position is required";
    }

    if (startDate.trim() === '') {
      isValid = false;
      errors.startDate = "Start date is required";
    }

    if (department.trim() === '') {
      isValid = false;
      errors.department = "Department is required";
    }

    setErrors(errors);
    return isValid;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    // Simple phone number validation regex pattern
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Employee</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  placeholder="Enter your first name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => onInputChange(e)}
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>
              <div className="col">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  placeholder="Enter your last name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => onInputChange(e)}
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="Email" className="form-label">
                  E-mail
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Enter your e-mail address"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="col">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  placeholder="Enter your phone number"
                  name="phone"
                  value={phone}
                  onChange={(e) => onInputChange(e)}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                  placeholder="Enter your address"
                  name="address"
                  value={address}
                  onChange={(e) => onInputChange(e)}
                />
                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
              </div>
              <div className="col">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                  placeholder="Enter your city"
                  name="city"
                  value={city}
                  onChange={(e) => onInputChange(e)}
                />
                {errors.city && <div className="invalid-feedback">{errors.city}</div>}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="position" className="form-label">
                  Position
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.position ? 'is-invalid' : ''}`}
                  placeholder="Enter your position"
                  name="position"
                  value={position}
                  onChange={(e) => onInputChange(e)}
                />
                {errors.position && <div className="invalid-feedback">{errors.position}</div>}
              </div>
              <div className="col">
                <label htmlFor="startDate" className="form-label">
                  Start Date
                </label>
                <input
                  type="date"
                  className={`form-control ${errors.startDate ? 'is-invalid' : ''}`}
                  name="startDate"
                  value={startDate}
                  onChange={(e) => onInputChange(e)}
                />
                {errors.startDate && <div className="invalid-feedback">{errors.startDate}</div>}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="department" className="form-label">
                  Department
                </label>
                <select
                  className={`form-control ${errors.department ? 'is-invalid' : ''}`}
                  name="department"
                  value={department}
                  onChange={(e) => onInputChange(e)}
                >
                  <option value="">Select a department</option>
                  {departmentList.map((dept) => (
                    <option key={dept.id} value={dept.name}>
                      {dept.name}
                    </option>
                  ))}
                </select>
                {errors.department && <div className="invalid-feedback">{errors.department}</div>}
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Update Employee
              </button>
              <Link to="/employee" className="btn btn-secondary ms-2">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
