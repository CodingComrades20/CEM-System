import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditPayment (){
  let navigate=useNavigate()

  const {id}=useParams()
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

useEffect(()=>{
    loadPayment()


},[])

const onSubmit=async(e)=>{
e.preventDefault();
await axios.put(`http://localhost:8080/payment/${id}`,payment) 
navigate("/")
};
 const loadPayment=async()=>{
    const result=await axios.get(`http://localhost:8080/payment/${id}`)
    setPayment(result.data)

 }


 return (
    <div className='container'>
      <div className='row>'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit Payment</h2>
          <form onSubmit={(e=>onSubmit(e))}>
          <div className='mb-3>'>
            <label htmlFor="Name" className="form-lable">
            Invoice Number
            </label>
            <input type={"text"} className="form-control" placeholder='Enter invoice number' name='invoiceNo' value={invoiceNo} 
            onChange={(e)=>onInputChange(e)}/>
          </div>
          <div className='mb-3>'>
            <label htmlFor="" className="form-lable">
          Status
            </label>
            <input type={"text"} className="form-control" placeholder='Select status' name='status' value={status}
            onChange={(e)=>onInputChange(e)}/>
              <select>
                <option> </option>
              </select>
          </div>

          <div className='mb-3>'>
            <label htmlFor="DueDate" className="form-lable">
            Due Date
            </label>
            <input type={"date"} className="form-control" placeholder='Due Date' name='dueDate' value={dueDate}
            onChange={(e)=>onInputChange(e)}/>
          </div>
          
          <div className='mb-3>'>
            <label htmlFor="Amount" className="form-lable">
            Amount
            </label>
            <input type={"text"} className="form-control" placeholder='Amount' name='amount' value={amount}
            onChange={(e)=>onInputChange(e)}/>
          </div>

          <div className='mb-3>'>
            <label htmlFor="PaymentMethod" className="form-lable">
            Payment Method
            </label>
            <input type={"text"} className="form-control" placeholder='Payment Method' name='paymentMethod' value={paymentMethod}
            onChange={(e)=>onInputChange(e)}/>
          </div>
          <div className='mb-3>'>
            <label htmlFor="PaymentDate" className="form-lable">
           Payment date
            </label>
            <input type={"date"} className="form-control" placeholder=' Payment date' name='paymentDate' value={paymentDate}
            onChange={(e)=>onInputChange(e)}/>
          </div>
          <div className='mb-3>'>
            <label htmlFor="DueAmount" className="form-lable">
            Due Amount
            </label>
            <input type={"text"} className="form-control" placeholder='Due Amount' name='dueAmount' value={dueAmount}
            onChange={(e)=>onInputChange(e)}/>
          </div>
          <div className='mb-3>'>
            <label htmlFor="Suppier" className="form-lable">
            Supplier
            </label>
            <input type={"text"} className="form-control" placeholder='Supplier' name='supplier' value={supplier}
            onChange={(e)=>onInputChange(e)}/>
          </div>

          <div className="text-center m-4">
          <button type='submit' className='btn btn-outline-primary mx-2'>Save</button>
          <Link  className='btn btn-outline-danger mx-2 ' to="/payment">Cancel</Link>
          </div>




          </form>


        </div>
        </div>
      </div>
  )
  }