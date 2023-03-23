import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
 function ProductHome() {
  const[products,setProducts]=useState([])
  const {id}= useParams()


  useEffect(()=>{
    loadProducts();
  },[]);


  const loadProducts=async()=>{
    const result=await axios.get("http://localhost:8080/product")
    setProducts(result.data);
  };

  const deleteProduct=async(id)=>{
  await axios.delete(`http://localhost:8080/product/${id}`)
  loadProducts()
  } 




  return (
    <div>
      <div className="container">
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Manufacture Date</th>
      <th scope="col">Expiry Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

      {

        products.map((products,index)=>(
                <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td> <img src="{products.image}"width="100" height="100"/></td>
            <td>{products.name}</td>
            <td>{products.category}</td>
            <td>{products.quantity}</td>
            <td>{products.price}</td>
            <td>{products.manufactureDate}</td>
            <td>{products.expiryDate}</td>
            <td>
                  
                  <Link className="btn btn-outline-primary mx-2"
              to={`/editproduct/${products.id}`}
                  >Edit</Link>
                  <button className="btn btn-danger mx-2"
                  onClick={()=>deleteProduct(products.id)}>Delete</button>

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

export default ProductHome;