import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewSupplier() {
  const [supplier, setSupplier] = useState({
    name: "",
    address: "",
    email: "",
    cno: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadSupplier();
  }, []);

  const loadSupplier = async () => {
    const result = await axios.get(`http://localhost:8080/supplier/${id}`);
    setSupplier(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Supplier's Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {supplier.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {supplier.name}
                </li>
                <li className="list-group-item">
                  <b>Address:</b>
                  {supplier.address}
                </li>
                <li className="list-group-item">
                  <b>Contact Number:</b>
                  {supplier.cno}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {supplier.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/supplierist"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}