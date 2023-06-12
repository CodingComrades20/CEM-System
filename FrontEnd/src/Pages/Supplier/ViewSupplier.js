import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";


/**
 * This component will show the full details of the supplier.
 * @returns the ViewSupplier component.
 */

export default function ViewSupplier() {

  // State to hold the customer data.
  const [supplier, setSupplier] = useState({
    name: "",
    address: "",
    email: "",
    cno: "",
  });

  // Get the supplier ID from the URL using the useParams hook.
  const { id } = useParams();

  // Load the sipplier data from the server using axios.
  useEffect(() => {
    loadSupplier();
  }, []);

  // fetch the supplier data from the server and update the state.
  const loadSupplier = async () => {
    const result = await axios.get(`http://localhost:8080/supplier/${id}`);
    setSupplier(result.data);
  };

  // render the form.
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Supplier's Details</h2>

          <div className="card">
            <div className="card-header">
              
              <ul className="list-group list-group-flush">
                <li className="list-group-item my-2">
                  <b>Name:</b>
                  {supplier.name}
                </li>
                <li className="list-group-item my-2">
                  <b>Address:</b>
                  {supplier.address}
                </li>
                <li className="list-group-item my-2">
                  <b>Contact Number:</b>
                  {supplier.cno}
                </li>
                <li className="list-group-item my-2">
                  <b>Email:</b>
                  {supplier.email}
                </li>
              </ul>
            </div>
          </div>

          {/* The back to Home button is a link that navigates back to the customer list page. */}
          <Link className="btn btn-primary my-4" to={"/supplierlist"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
