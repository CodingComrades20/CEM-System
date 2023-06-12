import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddEmployee() {
  let navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    position: "",
    startDate: "",
    department: "",
  });

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("http://localhost:8081/departments");
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const { firstName, lastName, email, phone, address, city, position, startDate, department } = employee;

  const [errors, setErrors] = useState({});

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    // Basic email format validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Initialize the errors object
    const newErrors = {};

    // Validate the required fields
    if (!firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!phone) {
      newErrors.phone = "Phone number is required";
    }
    if (!address) {
      newErrors.address = "Address is required";
    }
    if (!city) {
      newErrors.city = "City is required";
    }
    if (!position) {
      newErrors.position = "Position is required";
    }
    if (!startDate) {
      newErrors.startDate = "Start date is required";
    }
    if (!department) {
      newErrors.department = "Department is required";
    }

    // Validate email format
    if (email && !validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // If there are errors, set the errors state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If there are no errors, submit the form
    try {
      await axios.post("http://localhost:8081/employee", employee);
      navigate("/employee");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Employee</h2>

          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                    placeholder="Enter first name"
                    name="firstName"
                    value={firstName}
                    onChange={onInputChange}
                  />
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                    placeholder="Enter last name"
                    name="lastName"
                    value={lastName}
                    onChange={onInputChange}
                  />
                  {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    placeholder="Enter phone number"
                    name="phone"
                    value={phone}
                    onChange={onInputChange}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.address ? "is-invalid" : ""}`}
                    placeholder="Enter address"
                    name="address"
                    value={address}
                    onChange={onInputChange}
                  />
                  {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.city ? "is-invalid" : ""}`}
                    placeholder="Enter city"
                    name="city"
                    value={city}
                    onChange={onInputChange}
                  />
                  {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="position" className="form-label">
                    Position
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.position ? "is-invalid" : ""}`}
                    placeholder="Enter position"
                    name="position"
                    value={position}
                    onChange={onInputChange}
                  />
                  {errors.position && <div className="invalid-feedback">{errors.position}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="startDate" className="form-label">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className={`form-control ${errors.startDate ? "is-invalid" : ""}`}
                    name="startDate"
                    value={startDate}
                    onChange={onInputChange}
                  />
                  {errors.startDate && <div className="invalid-feedback">{errors.startDate}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="department" className="form-label">
                    Department
                  </label>
                  <select
                    className={`form-select ${errors.department ? "is-invalid" : ""}`}
                    name="department"
                    value={department}
                    onChange={onInputChange}
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.departmentName}>
                        {dept.departmentName}
                      </option>
                    ))}
                  </select>
                  {errors.department && <div className="invalid-feedback">{errors.department}</div>}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
              <Link to="/" className="btn btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
