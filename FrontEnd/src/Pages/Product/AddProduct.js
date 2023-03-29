import axios from 'axios';
//import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DropdownCategory from './DropdownCategory';
import React, { useState, useEffect } from 'react';

export default function AddProduct (){
  let navigate=useNavigate()
 const[product,setProduct]=useState({
  image:"",
  name:"",
  category:"",
  quantity:"",
  price:"",
  manufactureDate:"",
  expiryDate:"",
 })


const{image,name,category,quantity,price, manufactureDate,expiryDate}=product;

const onInputChange=(e)=>{
setProduct({...product,[e.target.name]:e.target.value})
};




const onSubmit=async(e)=>{
e.preventDefault();
await axios.post("http://localhost:8080/product",product) 
navigate("/product")
};


  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Fetch data from the Spring Boot controller
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/category');
      const options = response.data.map(row => ({  label: row.categoryType,value: row.id}));
      setOptions(options);
    };

    fetchData();
  }, []);

{
  return (
    <div className='container'>
      <div className='row>'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Add Product</h2>
          <form onSubmit={(e=>onSubmit(e))}>
          <div className='mb-3>'>
            <label htmlFor="Name" className="form-lable">
            Product Name
            </label>
            <input type={"text"} className="form-control" placeholder='Enter product name' name='name' value={name} 
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
            Select Category
            </label>
            <select onChange={(e)=>onInputChange(e)} className="form-control" placeholder='---select category---'name='category' value={category}>
      {options.map(option => (
        <option key={option.value} value={option.lable} >{option.label}</option>
      ))}
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