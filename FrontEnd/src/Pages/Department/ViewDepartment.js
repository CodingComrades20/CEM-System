import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewDepartment() {
    const [department, setDepartment] = useState({
        id:"",
        departmentCode:"",
        departmentName:"",
        departmentAddress:"",
        noOfEmployees:""
      });
      const { id } = useParams();

      useEffect(() => {
        async function loadDepartment() {
          const result = await axios.get(`http://localhost:8081/department/${id}`);
          setDepartment(result.data);
        }
        loadDepartment();
      }, [id]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Department id : {department.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Code</b>
                  {department.departmentCode}
                </li>
                <li className="list-group-item">
                  <b>Name</b>
                  {department.departmentName}
                </li>
                <li className="list-group-item">
                  <b>Address</b>
                  {department.departmentAddress}
                </li>
                <li className="list-group-item">
                  <b>No Of Employee:</b>
                  {department.noOfEmployees}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/department"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
