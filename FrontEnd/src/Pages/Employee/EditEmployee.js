import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEmployee() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [employee, SetEmployee] = useState({
    fullname: "",
    department: "",
    position: "",
    contactno:""
  });

  const { fullname, department, position, contactno } = employee;

  const onInputChange = (e) => {
    SetEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/employee/${id}`, employee);
    navigate("/");
  };

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8080/employee/${id}`);
    SetEmployee(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit employee</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Fullname" className="form-label">
                Full Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="fullname"
                value={fullname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Department" className="form-label">
                Department
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your department"
                name="department"
                value={department}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="position" className="form-label">
                Position
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your position"
                name="position"
                value={position}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactno" className="form-label">
                Contact No
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your contactno"
                name="contactno"
                value={contactno}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
