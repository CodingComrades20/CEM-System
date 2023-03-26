import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link} from 'react-router-dom';
 function Payment() {
  const[payment,setPayment]=useState([])
  useEffect(()=>{
    loadPayment();
  },[]);


  const loadPayment=async()=>{
    const result=await axios.get("http://localhost:8080/payment")
    setPayment(result.data);
  };

  const deletePayment=async(id)=>{
  await axios.delete(`http://localhost:8080/payment/${id}`)
  loadPayment()
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
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

      {

        payment.map((payment,index)=>(
                <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{payment.invoiceNo}</td>
            <td>{payment.status}</td>
            <td>{payment.dueDate}</td>
            <td>{payment.amount}</td>
            
           
            
            <td>
            <Link
                    className="btn btn-primary mx-2"
                    to={`/viewpayment/${payment.id}`}
                  >
                    View
                  </Link>
                  <Link className="btn btn-outline-primary mx-2"
              to={`/editPayment/${payment.id}`}
                  >Edit</Link>
                  <button className="btn btn-danger mx-2"
                  onClick={()=>deletePayment(payment.id)}>Delete</button>

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

export default Payment;