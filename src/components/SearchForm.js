import React from "react";

const SearchForm = ({ searchTerm, changeHandler }) =>
  <div>
    <label for="what">
      Was:
      <input
        type="text"
        className="input-field"
        name="what"
        value={searchTerm}
        onChange={e => {
          changeHandler(e.target.value);
        }}
      />
    </label>
  </div>;

export default SearchForm;
