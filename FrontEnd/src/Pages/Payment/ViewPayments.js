import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

/**
 * This component will show full details of the payment
 * @returns the ViewPayment component
 */
export default function ViewPayment() {
  // Initializing the payment state variable using the useState hook.
  const [payment, setPayment] = useState({
    paymentMethod:"",
    paymentDate:"",
    dueAmount:"",
    supplier:"",
  });

// Extracting the id parameter from the URL using the useParams hook.
  const { id } = useParams();

  // Loading the payment details on component mount using the useEffect hook.
  useEffect(() => {
    loadPayment();
  }, []);

  // Fetching the payment details from the API and updating the state.
  const loadPayment = async () => {
    const result = await axios.get(`http://localhost:8080/payment/${id}`);
    setPayment(result.data);
  };

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2>Payment's Details</h2>
            <div className="card">
              <div className="card-header">
                Details of Payment id : {payment.id}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>PaymentMethod:</b> 
                    {payment.paymentMethod}
                  </li>
                  <li className="list-group-item">
                    <b>paymentDate:</b> 
                    {payment.paymentDate}
                  </li>
                  <li className="list-group-item">
                    <b>Due Amount:</b> 
                    {payment.dueAmount}
                  </li>
                  <li className="list-group-item">
                    <b>Supplier:</b> 
                    {payment.supplier}
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn btn-outline-primary my-2" to={"/paymentlist"}>
              Back to PaymentList
            </Link>
            <Link
              className="btn btn-outline-danger mx-2"
              to={`/editPayment/${payment.id}`}
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    );
    
}
