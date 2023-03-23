import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function AddPayment (){
  let navigate=useNavigate()
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


const{invoiceNo,status,dueDate,amount,paymentMethod,paymentDate,dueAmount,supplier}=payment;

const onInputChange=(e)=>{
setPayment({...payment,[e.target.name]:e.target.value})
};

const onSubmit=async(e)=>{
e.preventDefault();
await axios.post("http://localhost:8080/payment",payment) 
navigate("/")
};

{
  return (
    <div className='container'>
      <div className='row>'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Add Payment</h2>
          <form onSubmit={(e=>onSubmit(e))}>
          <div className='mb-3>'>
            <label htmlFor="Name" className="form-lable">
            Invoice Number
            </label>
            <input type={"text"} className="form-control" placeholder='Enter invoice number' name='invoiceNo' value={invoiceNo} 
            onChange={(e)=>onInputChange(e)}/>
          </div>
          <div className='mb-3>'>
            <label htmlFor="Name" className="form-lable">
            Product Image
            </label>
            <input type={"file"} className="form-control" multiple accept="image/*
            "placeholder='Upload Image' name='image' value={image} 
            onChange={(e)=>onInputChange(e)}/>
          </div>

          <div className='mb-3>'>
            <label htmlFor="Category" className="form-lable">
            Product Category
            </label>
            <input type={"text"} className="form-control" placeholder='Select Product category' name='category' value={category}
            onChange={(e)=>onInputChange(e)}/>
              <select>
                <option> </option>
              </select>
          </div>

          <div className='mb-3>'>
            <label htmlFor="Quantity" className="form-lable">
            Quantity
            </label>
            <input type={"text"} className="form-control" placeholder='Enter quantity' name='quantity' value={quantity}
            onChange={(e)=>onInputChange(e)}/>
          </div>
          
          <div className='mb-3>'>
            <label htmlFor="Price" className="form-lable">
            Price
            </label>
            <input type={"text"} className="form-control" placeholder='Enter price' name='price' value={price}
            onChange={(e)=>onInputChange(e)}/>
          </div>

          <div className='mb-3>'>
            <label htmlFor="Price" className="form-lable">
            Manufacture date
            </label>
            <input type={"date"} className="form-control" placeholder='Enter manufacture date' name='manufactureDate' value={manufactureDate}
            onChange={(e)=>onInputChange(e)}/>
          </div>
                 
          <div className='mb-3>'>
            <label htmlFor="Price" className="form-lable">
           Expiry date
            </label>
            <input type={"date"} className="form-control" placeholder=' Expiry date' name='expiryDate' value={expiryDate}
            onChange={(e)=>onInputChange(e)}/>
          </div>
          <div className="text-center m-4">
          <button type='submit' className='btn btn-outline-primary mx-2'>Save</button>
          <Link  className='btn btn-outline-danger mx-2 ' to="/">Cancel</Link>
          </div>
          </form>


        </div>
      </div>
    </div>
  )
}
}