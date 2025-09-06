import React from "react";

const CitySelector = ({ cities, selected, onSelect, label }) => {
  return (
    <div>
      <label>{label}:</label>{' '}
      <select value={selected} onChange={(e) => onSelect(e.target.value)}>
        {Object.entries(cities).map(([key, city]) => (
          <option key={key} value={key}>{city.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
