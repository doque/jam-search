import React, { Component } from "react";
import SuggestItem from "./SuggestItem";

class Suggestions extends Component {
  render() {
    return (
      <div>
        {this.props.data.suggests.map(suggest => <SuggestItem {...suggest} />)}
      </div>
    );
  }
}

export default Suggestions;
