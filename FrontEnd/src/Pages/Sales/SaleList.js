import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { SALES_API } from "../../util";


/**
 * This component will handle the sales list.
 * @returns the SaleList component.
 */

export default function SaleList() {
  
  // state to hold the list of customers retrieved from the server.
  const [sales, setSales] = useState([]);

  // retrieves the id parameter from the URL.
  const { id } = useParams();

  // loads the customer list from the server when the component is mounted.
  useEffect(() => {
    loadSales();
  }, []);

  // retrieves the list of sales from the server.
  const loadSales = async () => {
    const result = await axios.get(SALES_API);
    setSales(result.data);
  };
  
  // Confirmation message for delete a sales record.
  const deleteSale = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this sales order?');
    if (confirmed) { 
    await axios.delete(`http://localhost:8080/sale/${id}`);
    loadSales();
    }
  };

  // renders the sales list as a table.
  return (
    <div className="container" style={{marginLeft: '220px' , marginTop: '80px'}}>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
            <th colSpan="6" className="text-center" >SALES LIST</th>
            </tr>
            <tr>
              <th scope="col">Seriel No</th>
              <th scope="col">Sales Order Id</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Product Name</th>
              <th scope="col">Delivery Address</th>
              <th scope="col">Delivered Date </th>
              <th scope="col">Contact No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{sale.salesorderid}</td>
                <td>{sale.cusname}</td>
                <td>{sale.productname}</td>
                <td>{sale.deliveryaddress}</td>
                <td>{sale.date}</td>
                <td>{sale.cno}</td>
                              
                <td>

                  {/* Link to view sale details */}
                  <Link
                    className="btn btn-primary mx-2" 
                    to={`/viewsale/${sale.id}`}
                  >
                    View
                  </Link>

                  {/* Link to edit sale details */}
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editsale/${sale.id}`}
                  >
                    Edit
                  </Link>

                  {/* Button to delete sale */}
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteSale(sale.id)}
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
