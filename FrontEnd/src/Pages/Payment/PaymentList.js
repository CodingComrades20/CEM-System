import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link} from 'react-router-dom';
 function PaymentHome() {
  const[payments,setPayments]=useState([])
  useEffect(()=>{
    loadPayments();
  },[]);


  const loadPayments=async()=>{
    const result=await axios.get("http://localhost:8080/payment")
    setPayments(result.data);
  };

  const deletePayment=async(id)=>{
  await axios.delete(`http://localhost:8080/payment/${id}`)
  loadPayments()
  } 




  return (
    <div>
      <div className="container">
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">InvoiceNo</th>
      <th scope="col">Status</th>
      <th scope="col">Due Date</th>
      <th scope="col">Amount</th>
      <th scope="col">PaymentMethod</th>
      <th scope="col">Payment Date</th>
      <th scope="col">Due Amount</th>
      <th scope="col">Supplier</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

      {

        payments.map((payments,index)=>(
                <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{payments.invoiceNo}</td>
            <td>{payments.status}</td>
            <td>{payments.dueDate}</td>
            <td>{payments.amount}</td>
            <td>{payments.paymentMethod}</td>
            <td>{payments.paymentDate}</td>
            <td>{payments.dueAmount}</td>
            <td>{payments.supplier}</td>
            <td>{payments.action}</td>
            <td>
                  
                  <Link className="btn btn-outline-primary mx-2"
              to={`/editpayment/${payments.id}`}
                  >Edit</Link>
                  <button className="btn btn-danger mx-2"
                  onClick={()=>deletePayment(payments.id)}>Delete</button>

            </td>
            
              </tr>
        ))
      }

  </tbody>
</table>
</div>
    </div>
  )
}

export default PaymentHome;