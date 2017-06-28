import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ searchTerm, onChange }) =>
  <div>
    <label>
      Was?
      <input type="text" name="what" value={searchTerm} onChange={onChange} />
    </label>
    <label>
      Wo?
      <input type="text" name="where" value={searchTerm} onChange={onChange} />
    </label>
  </div>;

export default SearchForm;
