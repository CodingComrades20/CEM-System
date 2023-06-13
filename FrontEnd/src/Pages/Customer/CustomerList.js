import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { CUSTOMERS_API } from "../../util";


/**
 * This component will handle the customer list.
 * @returns the CustomerList component.
 */

export default function CustomerList() {
  
  // state to hold the list of customers retrieved from the server.
  const [customers, setCustomers] = useState([]);

  // retrieves the id parameter from the URL.
  const { id } = useParams();

  // loads the customer list from the server when the component is mounted.
  useEffect(() => {
    loadCustomers();
  }, []);

  // retrieves the list of customers from the server.
  const loadCustomers = async () => {
    const result = await axios.get(CUSTOMERS_API);
    setCustomers(result.data);
  };
  
  // Confirmation message for delete a customer's record.
  const deleteCustomer = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this customer?');
    if (confirmed) { 
    await axios.delete(`http://localhost:8080/customer/${id}`);
    loadCustomers();
    }
  };

  // renders the customer list as a table.
  return (
    <div className="container" style={{marginLeft: '220px' , marginTop: '80px'}}>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
            <th colSpan="6" className="text-center" >CUSTOMER LIST</th>
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
            {customers.map((customer, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.cno}</td>
                
                <td>

                  {/* Link to view customer details */}
                  <Link
                    className="btn btn-primary mx-2" 
                    to={`/viewcustomer/${customer.id}`}
                  >
                    View
                  </Link>

                  {/* Link to edit customer details */}
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editcustomer/${customer.id}`}
                  >
                    Edit
                  </Link>

                  {/* Button to delete customer */}
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteCustomer(customer.id)}
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
