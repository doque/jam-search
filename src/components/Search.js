import React, { Component } from "react";

import Suggestions from "./Suggestions";
import SearchForm from "./SearchForm";

class SearchContainer extends Component {
  state = {
    data: {
      suggests: []
    },
    searchTerm: ""
  };

  changeHandler(event) {
    const value = event.target.value.trim();
    const type = event.target.name;

    if (value.length >= 3) {
      this.fetchData(value, type).then(data => this.setState({ data }));
    } else {
      this.setState({ data: { suggests: [] } });
    }
    this.setState({ searchTerm: value });
  }

  clickHandler(searchTerm) {
    this.setState({ searchTerm });
  }

  fetchData(value, type = "what") {
    const url = `https://jameda.localtunnel.me/suche.jameda-elements.de/${type}-new?query=${value}`;

    return fetch(url)
      .then(response => response.json())
      .catch(e => console.error("Probably offline?", e));
  }

  render() {
    return (
      <div>
        <SearchForm
          searchTerm={this.state.searchTerm}
          changeHandler={this.changeHandler.bind(this)}
        />
        <Suggestions
          data={this.state.data}
          clickHandler={this.clickHandler.bind(this)}
        />
      </div>
    );
  }
}

export default SearchContainer;
