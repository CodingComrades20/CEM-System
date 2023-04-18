import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PAYMENT_API } from "../../Util";

/**
 * This component will handle the payment details
 * @returns the Payment component
 */
function Payment() {
  // Define a state variable for storing the payment data.
  const [payment, setPayment] = useState([]);

  // Load the payment data when the component mounts.
  useEffect(() => {
    loadPayment();
  }, []);

  // Function to fetch the payment data from the server.
  const loadPayment = async () => {
    const result = await axios.get(PAYMENT_API);
    setPayment(result.data);
  };

  // Function to delete a payment record.
  const deletePayment = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this payment record?"
    );
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/payment/${id}`);
      loadPayment();
    }
  };
  
// Returning the component.
  return (
    <div>
      <div className="container">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">InvoiceNo</th>
              <th scope="col">Status</th>
              <th scope="col">Due Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((payment, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{payment.invoiceNo}</td>
                <td>{payment.status}</td>
                <td>{payment.dueDate}</td>
                <td>{payment.amount}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewpayment/${payment.id}`}
                  >
                    View
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletePayment(payment.id)}
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

// Export the Payment component as the default export.
export default Payment;
