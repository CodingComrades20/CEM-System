import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { SUPPLIERS_API } from "../../util";


/**
 * This component will handle the supplier list.
 * @returns the SupplierList component.
 */

export default function Supplier() {
  
  // state to hold the list of suppliers retrieved from the server.
  const [suppliers, setSuppliers] = useState([]);

  // retrieves the id parameter from the URL.
  const { id } = useParams();

  // loads the supplier list from the server when the component is mounted.  
  useEffect(() => {
    loadSuppliers();
  }, []);

  // retrieves the list of suppliers from the server.
  const loadSuppliers = async () => {
    const result = await axios.get(SUPPLIERS_API);
    setSuppliers(result.data);
  };

  // Confirmation message for delete a suppliers's record.
  const deleteSupplier = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this supplier?');
    if (confirmed) {
      await axios.delete(`http://localhost:8080/supplier/${id}`);
      loadSuppliers();
    }
  };

  // renders the supplier list as a table.
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
            <th colSpan="6" className="text-center" >SUPPLIERS LIST</th>
            </tr>
            <tr>
              <th scope="col">Seriel No</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Contact No</th>
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
                
                <td>

                  {/* Link to view supplier details */}
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewsupplier/${supplier.id}`}
                  >
                    View
                  </Link>

                  {/* Link to view supplier details */}
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editsupplier/${supplier.id}`}
                  >
                    Edit
                  </Link>

                  {/* Button to delete supplier */}
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
