import React, { useEffect,useState } from "react";
import axios from "axios";
export default function Categorylist() {
  
    const[categories,setCategories]=useState([])
    useEffect(()=>{
      loadCategories();
    },[]);
  
  
    const loadCategories=async()=>{
      const result=await axios.get("http://localhost:8080/category")
      setCategories(result.data);
    };
  
    const deleteCategory=async(id)=>{
    await axios.delete(`http://localhost:8080/category/${id}`)
    loadCategories()
    } 
  
  
    return (
      <div>
        <div className="container">
        <table className="table border shadow">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Category Types</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
  
        {
          categories.map((categories,index)=>(
                  <tr>
              <th scope="row" key={index}>{index+1}</th>
              <td>{categories.categoryType}</td>
              <td>
                    <button className="btn btn-danger mx-2"
                    onClick={()=>deleteCategory(categories.id)}>Delete</button>
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
