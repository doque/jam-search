import React from "react";
import PropTypes from "prop-types";

const SuggestItem = ({ header, list, clickHandler }) =>
  <div>
    <h2>{header}</h2>
    <ul>
      {list.map(item =>
        <li onClick={() => clickHandler(item.term)}>
          {item.term}
        </li>
      )}
    </ul>
  </div>;

export default SuggestItem;
