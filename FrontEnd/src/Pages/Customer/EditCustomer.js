import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



/**
 * This component will handle the changes of customer.
 * @returns the EditCustomer component.
 */

export default function EditCustomer() {

  // hook to navigate to a different page after a successful submission.
  let navigate = useNavigate();

  // get the ID parameter from the URL.
  const { id } = useParams();

  // set the initial state of the customer.
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    cno: "",
    email: "",
    
  });

  // destructuring the state.
  const { name, address, cno, email } = customer;

  // handle input changes.
  const onInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

 // load the customer data from the server.
  useEffect(() => {
    loadCustomer();
  }, []);

  // handle form submission.
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/customer/${id}`, customer);
    navigate("/customerlist");
  };

  // fetch the customer data from the server and update the state.
  const loadCustomer = async () => {
    const result = await axios.get(`http://localhost:8080/customer/${id}`);
    setCustomer(result.data);
  };

  // render the form.
  return (
    <div className="container" style={{ marginTop: '80px'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Customer's Details</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Customer's Name"
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
                placeholder="Enter customer's Address"
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
                placeholder="Enter Customer's Contact Number"
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
                placeholder="Enter Customer's e-mail id"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            {/* The submit button is disabled while the form is submitting, to prevent double-submission. */}
            <button type="submit" className="btn btn-outline-primary" >
              Submit
            </button>

            {/* The cancel button is a link that navigates back to the customer list page. */}
            <Link className="btn btn-outline-danger mx-2" to="/customerlist">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
