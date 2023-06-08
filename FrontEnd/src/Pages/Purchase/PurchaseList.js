import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { PURCHASES_API } from "../../util";


/**
 * This component will handle the purchase list.
 * @returns the PurchaseList component.
 */

export default function PurchaseList() {
  
  // state to hold the list of purchases retrieved from the server.
  const [purchases, setPurchases] = useState([]);

  // retrieves the id parameter from the URL.
  const { id } = useParams();

  // loads the purchase list from the server when the component is mounted.
  useEffect(() => {
    loadPurchases();
  }, []);

  // retrieves the list of sales from the server.
  const loadPurchases = async () => {
    const result = await axios.get(PURCHASES_API);
    setPurchases(result.data);
  };
  
  // Confirmation message for delete a purchase record.
  const deletePurchase = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this purchases order?');
    if (confirmed) { 
    await axios.delete(`http://localhost:8080/purchase/${id}`);
    loadPurchases();
    }
  };

  // renders the purchase list as a table.
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
            <th colSpan="6" className="text-center" >PURCHASE LIST</th>
            </tr>
            <tr>
              <th scope="col">Seriel No</th>
              <th scope="col">Purchase Order Id</th>
              <th scope="col">Supplier Name</th>
              <th scope="col">Delivered Date </th>
              <th scope="col">Contact No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{purchase.purchaseorderid}</td>
                <td>{purchase.supname}</td>
                <td>{purchase.deliveryaddress}</td>
                <td>{purchase.date}</td>
                <td>{purchase.cno}</td>
                              
                <td>

                  {/* Link to view purchase details */}
                  <Link
                    className="btn btn-primary mx-2" 
                    to={`/viewpurchase/${purchase.id}`}
                  >
                    View
                  </Link>

                  {/* Link to edit purchase details */}
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editpurchase/${purchase.id}`}
                  >
                    Edit
                  </Link>

                  {/* Button to delete purchase */}
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletePurchase(purchase.id)}
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
