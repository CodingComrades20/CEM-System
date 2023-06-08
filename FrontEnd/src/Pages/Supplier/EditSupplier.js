import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


/**
 * This component will handle the changes of customer.
 * @returns the EditSupplier component.
 */

export default function EditSupplier() {

  // hook to navigate to a different page after a successful submission.
  let navigate = useNavigate();

  // get the ID parameter from the URL.
  const { id } = useParams();

  // set the initial state of the supplier.
  const [supplier, setSupplier] = useState({
    name: "",
    address: "",
    cno: "",
    email: "",
    
  });

  // destructuring the state.
  const { name, address, cno, email } = supplier;

  // handle input changes.
  const onInputChange = (e) => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };

  // load the supplier data from the server.
  useEffect(() => {
    loadSupplier();
  }, []);

  // handle form submission.
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/supplier/${id}`, supplier);
    navigate("/supplierlist");
  };

  // fetch the supplier data from the server and update the state.
  const loadSupplier = async () => {
    const result = await axios.get(`http://localhost:8080/supplier/${id}`);
    setSupplier(result.data);
  };

  // render the form.
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Supplier's Details</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Supplier's Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Supplier's Address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cno" className="form-label">
                Contact Number
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter Supplier's Contact Number"
                name="cno"
                value={cno}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Supplier's e-mail id"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            {/* The submit button is disabled while the form is submitting, to prevent double-submission. */}
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>

            {/* The cancel button is a link that navigates back to the customer list page. */}           
            <Link className="btn btn-outline-danger mx-2" to="/supplierlist">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
