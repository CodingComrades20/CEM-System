import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function DropdownCategory() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Fetch data from the Spring Boot controller
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/category');
      const options = response.data.map(row => ({ value: row.id, label: row.categoryType }));
      setOptions(options);
    };

    fetchData();
  }, []);

  return (
    <select >
      {options.map(option => (
        <option key={option.value} value={option.value} >{option.label}</option>
      ))}
    </select>
  );
}






