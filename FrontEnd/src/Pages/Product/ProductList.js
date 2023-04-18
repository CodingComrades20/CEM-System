import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { PRODUCT_API } from "../../Util";

/**
 * This component will show the product list 
 * @returns the Product component
 */
function Product() {
  // Define state variable "products" and "setProducts" using useState hook.
  const [products, setProducts] = useState([]);

  // useEffect hook is used to load products on the initial render.
  useEffect(() => {
    loadProducts();
  }, []);

   // This function loads products from the server and updates the "products" state variable.
  const loadProducts = async () => {
    const result = await axios.get(PRODUCT_API);
    setProducts(result.data);
  };

  // Conformation for delete a record.
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/product/${id}`);
      loadProducts();
    }
  };

  // This component renders the list of products.
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
            {products.map((product, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td><img src="{product.image}" width="100" height="100" /></td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.manufactureDate}</td>
                <td>{product.expiryDate}</td>
                <td>
                  <Link className="btn btn-outline-primary mx-2" to={`/editProduct/${product.id}`}>Edit</Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
