import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditDepartment() {

    let navigate = useNavigate();
    const {id} = useParams();

    const[department, setDepartment] = useState({
        id:"",
        departmentCode:"",
        departmentName:"",
        departmentAddress:"",
        noOfEmployees:""
    })

    const {departmentCode, departmentName, departmentAddress, noOfEmployees} = department;

    const onInputChange = (e) =>{
        setDepartment({...department, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        loadDepartment();
      }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8081/department/${id}`, department);
        navigate("/department");
      };

      const loadDepartment = async () => {
        const result = await axios.get(`http://localhost:8081/department/${id}`);
        setDepartment(result.data);
      };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Update Department</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="departmentCode" className="form-label">
                Department Code
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Department Code"
                name="departmentCode"
                value={departmentCode}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="departmentName" className="form-label">
                Department Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Department Name"
                name="departmentName"
                value={departmentName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="departmentAddress" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Address"
                name="departmentAddress"
                value={departmentAddress}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="noOfEmployee" className="form-label">
                Number of Employees
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter number of employees"
                name="numberOfEmployees"
                value={noOfEmployees}
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
  )
}
