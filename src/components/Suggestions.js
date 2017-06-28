import React from "react";
import PropTypes from "prop-types";

import SuggestItem from "./SuggestItem";

const Suggestions = ({ suggestions }) =>
  <div>
    {suggestions.map((suggest, i) => <SuggestItem {...suggest} key={i} />)}
  </div>;

Suggestions.PropTypes = {
  suggestions: PropTypes.array
};

export default Suggestions;
