import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddCustomer() {
  let navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    cno: "",
    email: "",
    
  });

  const { name, address, cno, email } = customer;

  const onInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/customer", customer);
    navigate("/customerlist");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-2 mt-4 shadow">
          <h2 className="text-center m-4"> Add New Customer </h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Customer's Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
               Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Customer's Address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cno" className="form-label">
                Contact Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Customer's Contact Number"
                name="cno"
                value={cno}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Customer's e-mail id"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            
            <button type="submit" className="btn btn-outline-primary mx-3">
              Submit     
            </button>
            <Link className="btn btn-outline-danger mx-3" to="/customerlist">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
