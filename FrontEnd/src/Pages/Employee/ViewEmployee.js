import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployee() {
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

  const { id } = useParams();

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8081/employee/${id}`);
    setEmployee(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details</h2>

          <div className="card">
            <div className="card-header">
              Details of employee id : {employee.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name:</b>
                  {employee.firstName}
                </li>
                <li className="list-group-item">
                  <b>Last Name:</b>
                  {employee.lastName}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {employee.email}
                </li>
                <li className="list-group-item">
                  <b>Phone:</b>
                  {employee.phone}
                </li>
                <li className="list-group-item">
                  <b>Address:</b>
                  {employee.address}
                </li>
                <li className="list-group-item">
                  <b>City:</b>
                  {employee.city}
                </li>
                <li className="list-group-item">
                  <b>Position:</b>
                  {employee.position}
                </li>
                <li className="list-group-item">
                  <b>Start Date:</b>
                  {employee.startDate}
                </li>
                <li className="list-group-item">
                  <b>Department:</b>
                  {employee.department}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/employee"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
