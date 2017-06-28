import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchForm extends Component {
  static propTypes = {
    searchTerm: PropTypes.string,
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
            value={this.props.searchTerm}
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
            value={this.props.searchTerm}
          />
        </label>
      </div>
    );
  }
}

export default SearchForm;
