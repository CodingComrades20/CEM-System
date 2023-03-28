import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            Customer Employee Mangement
          </Link>
          
          <div className="d-flex justify-content-center">
          <Link className="btn btn-outline-info mx-4" to="/addcustomer">
            Add Customer
          </Link>
          <Link className="btn btn-outline-info mx-2" to="/addsupplier">
            Add Supplier
          </Link>
          </div>

        </div>
      </nav>
    </div>
  );
}
