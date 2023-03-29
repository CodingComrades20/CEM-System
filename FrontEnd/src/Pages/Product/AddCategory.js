import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DropdownCategory from './DropdownCategory';
export default function AddCategory (){
  let navigate=useNavigate()
 const[category,setCategory]=useState({
  categoryType:"",
 })


const{categoryType}=category;

const onInputChange=(e)=>{
setCategory({...category,[e.target.name]:e.target.value})
};

const onSubmit=async(e)=>{
e.preventDefault();
await axios.post("http://localhost:8080/category",category) 
navigate("/product")
};

{
  return (
    <div className='container'>
      <div className='row>'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Add Category</h2>
          <form onSubmit={(e=>onSubmit(e))}>
          <div className='mb-3>'>
            <label htmlFor="Name" className="form-lable">
            Category Type
            </label>
            <input type={"text"} className="form-control" placeholder='Enter category Type' name='categoryType' value={categoryType} 
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