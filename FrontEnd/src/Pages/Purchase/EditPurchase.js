import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



/**
 * This component will handle the changes of purchases.
 * @returns the EditPurchase component.
 */

export default function EditPurchase() {

  // hook to navigate to a different page after a successful submission.
  let navigate = useNavigate();

  // get the ID parameter from the URL.
  const { id } = useParams();

  // set the initial state of the purchase.
  const [purchase, setPurchase] = useState({
    purchaseorderid: "",
    supname: "",
    productname: "",
    date:"",
    cno: "",
    
  });

  // destructuring the state.
  const { purchaseorderid, supname, productname, date, cno } = purchase;

  // handle input changes.
  const onInputChange = (e) => {
    setPurchase({ ...purchase, [e.target.name]: e.target.value });
  };

 // load the purchase data from the server.
  useEffect(() => {
    loadPurchase();
  }, []);

  // handle form submission.
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/purchase/${id}`, purchase);
    navigate("/purchaselist");
  };

  // fetch the purchase data from the server and update the state.
  const loadPurchase= async () => {
    const result = await axios.get(`http://localhost:8080/purchase/${id}`);
    setPurchase(result.data);
  };

  // render the form.
  return (
    <div className="container"style={{ marginTop: '80px'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Purchases Details</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="purchaseorderid" className="form-label">
              Purchase Order Id
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Purchase Order Id"
                name="purchaseorderid"
                value={purchaseorderid}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="supname" className="form-label">
              Supplier Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Supplier's Name"
                name="supname"
                value={supname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productname" className="form-label">
              Product Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter product's Name"
                name="productname"
                value={productname}
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
                placeholder="Enter Supplier's Contact Number"
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
                placeholder="Enter Supplier's Contact Number"
                name="cno"
                value={cno}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            {/* The submit button is disabled while the form is submitting, to prevent double-submission. */}
            <button type="submit" className="btn btn-outline-primary" >
              Submit
            </button>

            {/* The cancel button is a link that navigates back to the purchase list page. */}
            <Link className="btn btn-outline-danger mx-2" to="/purchaselist">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
