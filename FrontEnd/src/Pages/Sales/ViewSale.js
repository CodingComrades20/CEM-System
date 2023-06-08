import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";


/**
 * This component will show the full details of the sale.
 * @returns the ViewSale component.
 */

export default function ViewSale() {
  
  // State to hold the sale data.
  const [sale, setSale] = useState({
    salesorderid: "",
    cusname: "",
    deliveryaddress: "",
    date:"",
    cno: "",
  });

  // Get the sale ID from the URL using the useParams hook.
  const { id } = useParams();

  // Load the sale data from the server using axios.
  useEffect(() => {
    loadSale();
  }, []);

  // fetch the sale data from the server and update the state.
  const loadSale = async () => {
    const result = await axios.get(`http://localhost:8080/sale/${id}`);
    setSale(result.data);
  };

  // render the form.
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-2 mt-4 shadow">
          <h2 className="text-center m-4">Sales Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {sale.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item my-2">
                  <b>Sales Order Id:</b>
                  {sale.salesorderid}
                </li>
                <li className="list-group-item my-2">
                  <b>Customer Name:</b>
                  {sale.cusname}
                </li>
                <li className="list-group-item my-2">
                  <b>Delivery Address:</b>
                  {sale.deliveryaddress}
                </li>
                <li className="list-group-item my-2">
                  <b>Delivered date:</b>
                  {sale.date}
                </li>
                <li className="list-group-item my-2">
                  <b>Contact Number:</b>
                  {sale.cno}
                </li>
              </ul>
            </div>
          </div>

          {/* The back to Home button is a link that navigates back to the sale list page. */}
          <Link className="btn btn-primary my-4" to={"/salelist"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
