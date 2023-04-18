import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { PAYMENT_API } from '../../Util';

/**
 * This component will handle the adding payment details
 * @returns the AddPayment component
 */
export default function AddPayment (){
  // Initialize the useNavigate hook.
  let navigate=useNavigate()

  // Initialize the payment state with default values.
 const[payment,setPayment]=useState({
  invoiceNo:"",
  status:"",
  dueDate:"",
  Amount:"",
  paymentMethod:"",
  paymentDate:"",
  dueAmount:"",
  supplier:"",
 })

// Destructure the payment state.
const{invoiceNo,status,dueDate,amount,paymentMethod,paymentDate,dueAmount,supplier}=payment;

// Handle the input change event.
const onInputChange=(e)=>{
setPayment({...payment,[e.target.name]:e.target.value})
};

// Handle the form submission event.
const onSubmit=async(e)=>{
e.preventDefault();
await axios.post(PAYMENT_API,payment) 
navigate("/paymentlist")
};

// Return the component.
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'>Add Payment</h2>
        <form onSubmit={(e => onSubmit(e))}>
          <div className='mb-3'>
            <label htmlFor='Name' className='form-lable'>
              Invoice Number
            </label>
            <input
              type={'number'}
              className='form-control'
              placeholder='Enter invoice number'
              name='invoiceNo'
              value={invoiceNo}
              onChange={(e) => onInputChange(e)}
              required 
              pattern="^[0-9]+$"
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='' className='form-lable'>
              Status
            </label>
            <select
              className='form-select'
              aria-label='Default select example'
              required
              name='status'
              value={status}
              onChange={(e) => onInputChange(e)}
            >
              <option value=''>--Select Status Type-- </option>
              <option value='paid'>Paid</option>
              <option value='unpaid'>Unpaid</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor='DueDate' className='form-lable'>
              Due Date
            </label>
            <input
              type={'date'}
              className='form-control'
              placeholder='Due Date'
              name='dueDate'
              value={dueDate}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='Amount' className='form-lable'>
              Amount
            </label>
            <input
              type={'number'}
              className='form-control'
              placeholder='Amount'
              name='amount'
              value={amount}
              onChange={(e) => onInputChange(e)}
              required 
              pattern="^[0-9]+$"
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='PaymentMethod' className='form-lable'>
              Payment Method
            </label>
            <select
              className='form-select'
              aria-label='Default select example'
              required
              name='paymentMethod'
              value={paymentMethod}
              onChange={(e) => onInputChange(e)}
            >
              <option value=''>--Select Payment Method-- </option>
              <option value='cash'>Cash</option>
              <option value='checks'>Checks</option>
              <option value='debit cards'>Debit cards</option>
              <option value='credit cards'>Credit catds</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor='PaymentDate' className='form-lable'>
              Payment date
            </label>
            <input
              type={'date'}
              className='form-control'
              placeholder='Payment date'
              name='paymentDate'
              value={paymentDate}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='DueAmount' className='form-lable'>
              Due Amount
            </label>
            <input
              type={'number'}
              className='form-control'
              placeholder='Due Amount'
              name='dueAmount'
              value={dueAmount}
              onChange={(e) => onInputChange(e)}             
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="Supplier" className="form-label">
              Supplier Name
            </label>
            <input 
              type={"text"} 
              className="form-control" 
              placeholder='Supplier' 
              name='supplier' 
              value={supplier}
              onChange={(e) => onInputChange(e)}
              required 
              pattern="^[a-zA-Z .]+$"
            />
          </div>

          <div className="text-center m-4">
          <button type='submit' className='btn btn-outline-primary mx-2'>Save</button>
          <Link  className='btn btn-outline-danger mx-2 ' to="/paymentlist">Cancel</Link>
          </div>

          </form>

        </div>
      </div>
    </div>
  );
}
