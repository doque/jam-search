import React from "react";
import PropTypes from "prop-types";

const SuggestItem = ({ header, list, clickHandler }) =>
  <div>
    <h2>
      {header}
    </h2>
    <ul>
      {list.map((item, i) =>
        <li onClick={() => clickHandler(item.term)} key={i}>
          {item.term}
        </li>
      )}
    </ul>
  </div>;

SuggestItem.propTypes = {
  header: PropTypes.string,
  list: PropTypes.array,
  clickHandler: PropTypes.func
};

export default SuggestItem;
