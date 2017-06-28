import React from "react";
import PropTypes from "prop-types";

import SuggestItem from "./SuggestItem";

const Suggestions = ({ suggestions, clickHandler }) =>
  <div>
    {suggestions.suggests.map(suggest =>
      <SuggestItem {...suggest} clickHandler={clickHandler} />
    )}
  </div>;

export default Suggestions;
