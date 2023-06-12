import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";


/**
 * This component will show the full details of the purchase.
 * @returns the ViewPurchase component.
 */

export default function ViewPurchase() {
  
  // State to hold the sale data.
  const [purchase, setPurchase] = useState({
    purchaseorderid: "",
    supname: "",
    date:"",
    cno: "",
  });

  // Get the sale ID from the URL using the useParams hook.
  const { id } = useParams();

  // Load the purchase data from the server using axios.
  useEffect(() => {
    loadPurchase();
  }, []);

  // fetch the purchase data from the server and update the state.
  const loadPurchase = async () => {
    const result = await axios.get(`http://localhost:8080/purchase/${id}`);
    setPurchase(result.data);
  };

  // render the form.
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-2 mt-4 shadow">
          <h2 className="text-center m-4">Purchase Details</h2>

          <div className="card">
            <div className="card-header">
              
              <ul className="list-group list-group-flush">
                <li className="list-group-item my-2">
                  <b>Purchase Order Id:</b>
                  {purchase.purchaseorderid}
                </li>
                <li className="list-group-item my-2">
                  <b>Supplier Name:</b>
                  {purchase.supname}
                </li>
            
                <li className="list-group-item my-2">
                  <b>Delivered date:</b>
                  {purchase.date}
                </li>
                <li className="list-group-item my-2">
                  <b>Contact Number:</b>
                  {purchase.cno}
                </li>
              </ul>
            </div>
          </div>

          {/* The back to Home button is a link that navigates back to the purchase list page. */}
          <Link className="btn btn-primary my-4" to={"/purchaselist"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
