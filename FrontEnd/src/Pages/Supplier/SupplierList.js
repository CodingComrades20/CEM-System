import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Supplier() {
  const [suppliers, setSuppliers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadSuppliers();
  }, []);

  const loadSuppliers = async () => {
    const result = await axios.get("http://localhost:8080/suppliers");
    setSuppliers(result.data);
  };

  const deleteSupplier = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this customer?');
    if (confirmed) {
      await axios.delete(`http://localhost:8080/supplier/${id}`);
      loadSuppliers();
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Seriel No</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Contact No</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{supplier.name}</td>
                <td>{supplier.address}</td>
                <td>{supplier.cno}</td>
                <td>{supplier.email}</td>
                
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewsupplier/${supplier.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editsupplier/${supplier.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteSupplier(supplier.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
