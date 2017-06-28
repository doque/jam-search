import React, { Component } from "react";
import PropTypes from "prop-types";

class SuggestItem extends Component {
  static propTypes = {
    header: PropTypes.string,
    clickHandler: PropTypes.func,
    list: PropTypes.array
  };

  render() {
    const { header, list } = this.props;

    return (
      <div>
        <h2>{header}</h2>
        <ul>
          {list.map(item =>
            <li
              onClick={e => {
                this.props.clickHandler(item.term);
              }}
            >
              {item.term}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default SuggestItem;
