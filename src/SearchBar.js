import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  static propTypes = {
    selected: PropTypes.string,
    changeHandler: PropTypes.func.isRequired
  };

  render() {
    debugger;
    return (
      <div>
        <label>
          Was?
          <input
            type="text"
            name="what"
            onChange={e => {
              this.props.changeHandler(e);
            }}
            value={this.props.selected}
          />
        </label>

        <label>
          Wo?
          <input
            type="text"
            name="where"
            onChange={e => {
              this.props.changeHandler(e);
            }}
            value={this.props.selected}
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
