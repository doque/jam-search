import React, { Component } from "react";

class SearchBar extends Component {
  render() {
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
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
