import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CUSTOMER_API } from "../../util";
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Importing Formik, Form, Field and ErrorMessage components from Formik library.
import * as Yup from 'yup'; // Importing Yup for form validation.


/**
 * This component will handle the Customer details adding part.
 * @returns the AddCustomer component.
 */

export default function AddCustomer() {
  
  // This hook provides the ability to navigate the user to a different route.
  let navigate = useNavigate();

  // Define the Yup schema for form validation.
  const Schema = Yup.object({
    name: Yup.string().required('Required'), // Name field should not be empty.
    address: Yup.string().required('Required'), // Address field should not be empty.
    cno: Yup.number().required('Required').positive('Must be a positive number'), // Contact number field should not be empty and should be a positive number.
    email: Yup.string().email('Invalid email address').required('Required'), // Email field should not be empty and should be a valid email.
    
  })

  // Handle form submission.
  const onSubmit = async (values) => {
    await axios.post(CUSTOMER_API, values); // Send a POST request to the API with the form values.
    navigate("/customerlist"); // Navigate to the customer list page after successful form submission.
  };

  return (
    <div className="container" style={{marginLeft: '100px' , marginTop: '100px'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-2 mt-4 shadow">
          <h2 className="text-center m-4"> Add New Customer </h2>

          {/* The Formik component initializes the form values and validation schema, and provides a submit handler function. */}
          <Formik
            initialValues={{ name: '', address: '', cno: '', email: '' }}
            onSubmit={onSubmit}
            validationSchema={Schema}
          >
            {({ isSubmitting }) => (

              // The Form component defines the form fields, their types and placeholders.
              // The Field component connects each field to the Formik form state.
              <Form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter Customer's Name"
                    name="name"
                  />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter Customer's Address"
                    name="address"
                  />
                  <ErrorMessage name="address" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="cno" className="form-label">
                    Contact Number
                  </label>
                  <Field
                    type="number"
                    className="form-control"
                    placeholder="Enter Customer's Contact Number"
                    name="cno"
                  />
                  <ErrorMessage name="cno" component="div" className="text-danger" />
                </div>

                <div className="mb-5">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter Customer's e-mail id"
                    name="email"
                  />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                

                {/* The submit button is disabled while the form is submitting, to prevent double-submission. */}
                <button type="submit" className="btn btn-outline-primary mx-3" disabled={isSubmitting}>
                  Submit
                </button>

                {/* The cancel button is a link that navigates back to the customer list page. */}
                <Link className="btn btn-outline-danger mx-3" to="/customerlist">
                  Cancel
                </Link>

              </Form>
            )}
          </Formik>

        </div>
      </div>
    </div>
  );
}
