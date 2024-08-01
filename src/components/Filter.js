
import React from 'react';

function Filter({ onCategoryChange }) {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="">All</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Desssert</option>
      {/* Add other categories as needed */}
    </select>
  );
}

export default Filter;
