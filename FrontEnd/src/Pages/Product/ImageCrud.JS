import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageCrud = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('/api/images');
      setImages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post('/api/images/upload', formData);
      setErrorMessage(null);
      setFile(null);
      fetchImages();
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data);
    }
  };

  const handleImageDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/images/${id}`);
      fetchImages();
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data);
    }
  };

  const handleImageUpdate = async (id) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.put(`/api/images/${id}`, formData);
      setErrorMessage(null);
      setFile(null);
      fetchImages();
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div>
      <h1>Image CRUD</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleImageUpload}>Upload</button>
      </div>
      {errorMessage && <div>{errorMessage}</div>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {images.map((image) => (
            <tr key={image.id}>
              <td>{image.id}</td>
              <td>{image.name}</td>
              <td>{image.type}</td>
              <td>
                <button onClick={() => handleImageDelete(image.id)}>Delete</button>
                <input type="file" onChange={handleFileChange} />
                <button onClick={() => handleImageUpdate(image.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImageCrud;
