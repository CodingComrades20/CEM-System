import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddOrganization() {
  let navigate = useNavigate();

  const [organization, setOrganization] = useState({
    organizationName: "",
    address: "",
    country: "",
    phoneNumber: "",
    email: "",
  });

  const { organizationName, address, country, phoneNumber, email } = organization;

  const [errors, setErrors] = useState({});
  const [countryOptions, setCountryOptions] = useState([]);

  useEffect(() => {
    fetchCountryOptions();
  }, []);

  const fetchCountryOptions = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const countries = response.data.map((country) => ({
        value: country.cca2,
        label: country.name.common,
      }));
      setCountryOptions(countries);
    } catch (error) {
      console.error("Error fetching country options:", error);
    }
  };
  

  const onInputChange = (e) => {
    setOrganization({ ...organization, [e.target.name]: e.target.value });
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
    if (!organizationName) {
      newErrors.organizationName = "Organization name is required";
    }
    if (!address) {
      newErrors.address = "Address is required";
    }
    if (!country) {
      newErrors.country = "Country is required";
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
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
      await axios.post("http://localhost:8081/organization", organization);
      navigate("/organizations");
    } catch (error) {
      console.error("Error adding organization:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Organization</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Organization Name
              </label>
              <input
                    type="text"
                     className={`form-control ${errors.organizationName ? "is-invalid" : ""}`}
                    placeholder="Enter organization name"
                    name="organizationName" // Corrected name attribute
                    value={organizationName}
                    onChange={onInputChange}
                    />
                    {errors.organizationName && (
                    <div className="invalid-feedback">{errors.organizationName}</div>
    )}
            </div>

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
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <select
                className={`form-control ${errors.country ? "is-invalid" : ""}`}
                name="country"
                value={country}
                onChange={onInputChange}
              >
                <option value="">Select country</option>
                {countryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.country && <div className="invalid-feedback">{errors.country}</div>}
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                        type="tel"
                        className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
                        placeholder="Enter phone number"
                        name="phoneNumber" // Corrected name attribute
                        value={phoneNumber}
                        onChange={onInputChange}
                        />
                        {errors.phoneNumber && (
  <div className="invalid-feedback">{errors.phoneNumber}</div>
                        )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Enter email address"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Add Organization
              </button>
              <Link to="/organization" className="btn btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
