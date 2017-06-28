import React, { Component } from "react";
import PropTypes from "prop-types";

import SuggestItem from "./SuggestItem";

class Suggestions extends Component {
  static propTypes = {
    data: PropTypes.object,
    clickHandler: PropTypes.func
  };

  render() {
    const { suggests } = this.props.data;
    const { clickHandler } = this.props;

    return (
      <div>
        {suggests.map(suggest =>
          <SuggestItem {...suggest} clickHandler={clickHandler} />
        )}
      </div>
    );
  }
}

export default Suggestions;
