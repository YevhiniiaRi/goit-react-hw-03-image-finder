import React from 'react';

const Searchbar = ({ value, onChange, onSubmit }) => {
  return (
    <div className="Searchbar">
      <input
        className="SearchForm"
        type="text"
        value={value}
        onChange={onChange}
      />
      <button onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

export default Searchbar;
