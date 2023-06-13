import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SALE_API } from "../../util";
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Importing Formik, Form, Field and ErrorMessage components from Formik library.
import * as Yup from 'yup'; // Importing Yup for form validation.


/**
 * This component will handle the Sales details adding part.
 * @returns the AddSales component.
 */

export default function AddSale() {
  
  // This hook provides the ability to navigate the user to a different route.
  let navigate = useNavigate();

  // Define the Yup schema for form validation.
  const Schema = Yup.object({
    salesorderid: Yup.string().required('Required'), // Sales order Id field should not be empty.
    cusname: Yup.string().required('Required'),
    productname: Yup.string().required('Required'),
    deliveryaddress: Yup.string().required('Required'), // Address field should not be empty.
    date: Yup.date().required('Required').min(new Date(), 'Date must not be in the past'),
    cno: Yup.number().required('Required').positive('Must be a positive number'), // Contact number field should not be empty and should be a positive number.

    
  })

  // Handle form submission.
  const onSubmit = async (values) => {
    await axios.post(SALE_API, values); // Send a POST request to the API with the form values.
    navigate("/salelist"); // Navigate to the customer list page after successful form submission.
  };

  return (
    <div className="container" style={{marginLeft: '100px' , marginTop: '50px'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-2 mt-4 shadow">
          <h2 className="text-center m-4"> Add New Sale </h2>

          {/* The Formik component initializes the form values and validation schema, and provides a submit handler function. */}
          <Formik
            initialValues={{ salesorderid: '', cusname: '', productname: '', deliveryaddress: '', date: '', cno: '' }}
            onSubmit={onSubmit}
            validationSchema={Schema}
          >
            {({ isSubmitting }) => (

              // The Form component defines the form fields, their types and placeholders.
              // The Field component connects each field to the Formik form state.
              <Form>
                <div className="mb-3">
                  <label htmlFor="salesorderid" className="form-label">
                    Sales Order Id
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter Sales Order Id"
                    name="salesorderid"
                  />
                  <ErrorMessage name="salesorderid" component="div" className="text-danger" />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="cusname" className="form-label">
                    Customer Name
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter Customer's Name"
                    name="cusname"
                  />
                  <ErrorMessage name="cusname" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="productname" className="form-label">
                  Product Name
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter Product Name"
                    name="productname"
                  />
                  <ErrorMessage name="productname" component="div" className="text-danger" />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="deliveryaddress" className="form-label">
                    Delivery Address
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter Customer's Delivery Address"
                    name="deliveryaddress"
                  />
                  <ErrorMessage name="deliveryaddress" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                  Date
                  </label>
                  <Field
                    type="date"
                    className="form-control"
                    placeholder="Enter Sales delivered Date"
                    name="date"
                  />
                  <ErrorMessage name="date" component="div" className="text-danger" />
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
                

                {/* The submit button is disabled while the form is submitting, to prevent double-submission. */}
                <button type="submit" className="btn btn-outline-primary mx-3" disabled={isSubmitting}>
                  Submit
                </button>

                {/* The cancel button is a link that navigates back to the customer list page. */}
                <Link className="btn btn-outline-danger mx-3" to="/salelist">
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
