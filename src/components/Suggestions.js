import React from "react";
import PropTypes from "prop-types";

import SuggestItem from "./SuggestItem";

const Suggestions = ({ suggestions }) =>
  <div>
    {suggestions.map(suggest => <SuggestItem {...suggest} />)}
  </div>;

export default Suggestions;
