import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



/**
 * This component will handle the changes of sales.
 * @returns the EditSale component.
 */

export default function EditSale() {

  // hook to navigate to a different page after a successful submission.
  let navigate = useNavigate();

  // get the ID parameter from the URL.
  const { id } = useParams();

  // set the initial state of the sale.
  const [sale, setSale] = useState({
    salesorderid: "",
    cusname: "",
    deliveryaddress: "",
    date:"",
    cno: "",
    
  });

  // destructuring the state.
  const { salesorderid, cusname, deliveryaddress, date, cno } = sale;

  // handle input changes.
  const onInputChange = (e) => {
    setSale({ ...sale, [e.target.name]: e.target.value });
  };

 // load the sale data from the server.
  useEffect(() => {
    loadSale();
  }, []);

  // handle form submission.
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/sale/${id}`, sale);
    navigate("/salelist");
  };

  // fetch the sale data from the server and update the state.
  const loadSale = async () => {
    const result = await axios.get(`http://localhost:8080/sale/${id}`);
    setSale(result.data);
  };

  // render the form.
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Sales Details</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="salesorderid" className="form-label">
              Sales Order Id
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Sales Order Id"
                name="salesorderid"
                value={salesorderid}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cusname" className="form-label">
              Customer Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Customer's Name"
                name="cusname"
                value={cusname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="deliveryaddress" className="form-label">
              deliveryaddress
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Customer's Delivery Address"
                name="deliveryaddress"
                value={deliveryaddress}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
              Delivered Date
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter Customer's Contact Number"
                name="date"
                value={date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cno" className="form-label">
              Contact Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Customer's Contact Number"
                name="cno"
                value={cno}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            {/* The submit button is disabled while the form is submitting, to prevent double-submission. */}
            <button type="submit" className="btn btn-outline-primary" >
              Submit
            </button>

            {/* The cancel button is a link that navigates back to the sale list page. */}
            <Link className="btn btn-outline-danger mx-2" to="/salelist">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
