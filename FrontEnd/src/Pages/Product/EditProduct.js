import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CATEGORY_API } from '../../Util';

/**
 * This component will handle the editing product details
 * @returns the EditProduct component
 */
export default function EditProduct (){
  // Getting navigation functionality.
  let navigate=useNavigate()

  // Getting product id from URL.
  const {id}=useParams()

  // Initializing state for product details.
 const[product,setProduct]=useState({
  image:"",
  name:"",
  category:"",
  quantity:"",
  price:"",
  manufactureDate:"",
  expiryDate:"",
 })

// Destructuring product state to get individual values.
const{name,category,quantity,price}=product;
const [manufactureDate, setManufactureDate] = useState("");
const [expiryDate, setExpiryDate] = useState("");
const onInputChange=(e)=>{
  const { name, value } = e.target;
    if (name === "manufactureDate") {
      setManufactureDate(value);
      if (expiryDate && value > expiryDate) {
        setExpiryDate("");
      }
    } else {
      if (manufactureDate && value < manufactureDate) {
        alert("Expiry date cannot be earlier than manufacture date");
      } else {
        setExpiryDate(value);
      }
    }
setProduct({...product,[e.target.name]:e.target.value})
};

// Fetching product data on component load.
useEffect(()=>{
    loadProduct()


},[])

// Handling form submission and updating product data.
const onSubmit=async(e)=>{
e.preventDefault();
await axios.put(`http://localhost:8080/product/${id}`,product) 
navigate("/productlist")
};

 const loadProduct=async()=>{
    const result=await axios.get(`http://localhost:8080/product/${id}`)
    setProduct(result.data)
 }

 const [options, setOptions] = useState([]);

 useEffect(() => {
   // Fetch data from the Spring Boot controller.
   const fetchData = async () => {
     const response = await axios.get(CATEGORY_API);
     // Mapping the response data to format compatible with Select options.
     const options = response.data.map(row => ({ label: row.categoryType, value: row.id }));
     setOptions(options);
   };

   fetchData();
 }, []);
 
 return (
  <div className='container'>
    <div className='row>'>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-3 shadow'>
        <h2 className='text-center m-4'>Edit Product</h2>
        <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3>'>
            <label htmlFor="Name" className="form-lable">
              Product Name
            </label>
            <input 
              type={"text"} 
              className="form-control" 
              placeholder='Enter product name' 
              name='name' 
              value={name} 
              onChange={(e)=>onInputChange(e)}
              required 
              pattern="^[a-zA-Z0-9 ]+$"
            />
          </div>

          <div className='mb-3>'>
            <label htmlFor="Category" className="form-lable">
              Product Category
            </label>
            <select 
                onChange={(e) => onInputChange(e)}
                className="form-select"
                placeholder="---select category---"
                name="category"
                value={category}
              >
              {options.map((option) => (
                <option key={option.value} value={option.label}>
                   {option.label}
                 </option>
               ))}
               </select>
          </div>

          <div className='mb-3>'>
            <label htmlFor="Quantity" className="form-lable">
              Quantity
            </label>
            <input 
              type={"number"} 
              className="form-control" 
              placeholder='Enter quantity' 
              name='quantity' 
              value={quantity}
              onChange={(e)=>onInputChange(e)}
              required 
              pattern="^[0-9]+$"
            />
          </div>
          
          <div className='mb-3>'>
            <label htmlFor="Price" className="form-lable">
              Price
            </label>
            <input 
              type={"text"} 
              className="form-control" 
              placeholder='Enter price' 
              name='price' 
              value={price}
              onChange={(e)=>onInputChange(e)}
              required 
              pattern="^[0-9]+$"
            />
          </div>

          <div className='mb-3>'>
            <label htmlFor="manufactureDate" className="form-lable">
              Manufacture date
            </label>
            <input 
              type={"date"} 
              className="form-control" 
              placeholder='Enter manufacture date' 
              name='manufactureDate' 
              value={manufactureDate}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
                 
          <div className='mb-3>'>
            <label htmlFor="expiryDate" className="form-lable">
              Expiry date
            </label>
            <input 
              type={"date"} 
              className="form-control" 
              placeholder=' Expiry date' 
              name='expiryDate' 
              value={expiryDate}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="text-center m-4">
            <button type='submit' className='btn btn-outline-primary mx-2'>Save</button>
            <Link className='btn btn-outline-danger mx-2 ' to="/productlist">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
);

 
  }