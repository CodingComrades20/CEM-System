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
        </div>
      </nav>
    </div>
  );
}


