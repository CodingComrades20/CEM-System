import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PURCHASE_API } from "../../util";
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Importing Formik, Form, Field and ErrorMessage components from Formik library.
import * as Yup from 'yup'; // Importing Yup for form validation.


/**
 * This component will handle the Purchase details adding part.
 * @returns the AddPurchase component.
 */

export default function AddPurchase() {
  
  // This hook provides the ability to navigate the user to a different route.
  let navigate = useNavigate();

  // Define the Yup schema for form validation.
  const Schema = Yup.object({
    purchaseorderid: Yup.string().required('Required'), // Purchase order Id field should not be empty.
    supname: Yup.string().required('Required'),
    productname: Yup.string().required('Required'),
    date: Yup.date().required('Required').min(new Date(), 'Date must not be in the past'),
    cno: Yup.number().required('Required').positive('Must be a positive number'), // Contact number field should not be empty and should be a positive number.

    
  })

  // Handle form submission.
  const onSubmit = async (values) => {
    await axios.post(PURCHASE_API, values); // Send a POST request to the API with the form values.
    navigate("/purchaselist"); // Navigate to the customer list page after successful form submission.
  };

  return (
    <div className="container" style={{marginLeft: '100px' , marginTop: '100px'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-2 mt-4 shadow">
          <h2 className="text-center m-4"> Add New Purchase </h2>

          {/* The Formik component initializes the form values and validation schema, and provides a submit handler function. */}
          <Formik
            initialValues={{ purchaseorderid: '', supname: '', productname: '', date: '', cno: '' }}
            onSubmit={onSubmit}
            validationSchema={Schema}
          >
            {({ isSubmitting }) => (

              // The Form component defines the form fields, their types and placeholders.
              // The Field component connects each field to the Formik form state.
              <Form>
                <div className="mb-3">
                  <label htmlFor="purchaseorderid" className="form-label">
                    Purchase Order Id
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter Purchase Order Id"
                    name="purchaseorderid"
                  />
                  <ErrorMessage name="purchaseorderid" component="div" className="text-danger" />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="supname" className="form-label">
                    Supplier Name
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter Supplier's Name"
                    name="supname"
                  />
                  <ErrorMessage name="supname" component="div" className="text-danger" />
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
                  <label htmlFor="date" className="form-label">
                  Date
                  </label>
                  <Field
                    type="date"
                    className="form-control"
                    placeholder="Enter Purchased delivered Date"
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
                    placeholder="Enter Supplier's Contact Number"
                    name="cno"
                  />
                  <ErrorMessage name="cno" component="div" className="text-danger" />
                </div>
                

                {/* The submit button is disabled while the form is submitting, to prevent double-submission. */}
                <button type="submit" className="btn btn-outline-primary mx-3" disabled={isSubmitting}>
                  Submit
                </button>

                {/* The cancel button is a link that navigates back to the purchase list page. */}
                <Link className="btn btn-outline-danger mx-3" to="/purchaselist">
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
