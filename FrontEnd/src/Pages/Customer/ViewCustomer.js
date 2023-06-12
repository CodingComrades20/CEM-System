import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";


/**
 * This component will show the full details of the customer.
 * @returns the ViewCustomer component.
 */

export default function ViewCustomer() {
  
  // State to hold the customer data.
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    email: "",
    cno: "",
  });

  // Get the customer ID from the URL using the useParams hook.
  const { id } = useParams();

  // Load the customer data from the server using axios.
  useEffect(() => {
    loadCustomer();
  }, []);

  // fetch the customer data from the server and update the state.
  const loadCustomer = async () => {
    const result = await axios.get(`http://localhost:8080/customer/${id}`);
    setCustomer(result.data);
  };

  // render the form.
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-2 mt-4 shadow">
          <h2 className="text-center m-4">Customer's Details</h2>

          <div className="card">
            <div className="card-header">
              
              <ul className="list-group list-group-flush">
                <li className="list-group-item my-2">
                  <b>Name:</b>
                  {customer.name}
                </li>
                <li className="list-group-item my-2">
                  <b>Address:</b>
                  {customer.address}
                </li>
                <li className="list-group-item my-2">
                  <b>Contact Number:</b>
                  {customer.cno}
                </li>
                <li className="list-group-item my-2">
                  <b>Email:</b>
                  {customer.email}
                </li>
              </ul>
            </div>
          </div>

          {/* The back to Home button is a link that navigates back to the customer list page. */}
          <Link className="btn btn-primary my-4" to={"/customerlist"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
