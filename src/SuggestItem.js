import React, { Component } from "react";

class SuggestItem extends Component {
  render() {
    const { header, list } = this.props;

    return (
      <div>
        <h2>{header}</h2>
        <ul>{list.map(item => <li>{item.term}</li>)}</ul>
      </div>
    );
  }
}

export default SuggestItem;
