import React, { Component } from "react";
import { dataFetcher } from "./Api";

import Suggestions from "./Suggestions";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    data: {
      suggests: []
    },
    selected: ""
  };

  clickHandler(selected) {
    this.setState({ selected });
  }

  changeHandler(event) {
    const value = event.target.value.trim();
    const type = event.target.name;

    if (value.length >= 3) {
      this.fetchData(value, type).then(data => this.setState({ data }));
    } else {
      this.setState({ data: { suggests: [] } });
    }
    this.setState({
      selected: value
    });
  }

  fetchData(value, type = "what") {
    const url = `https://jameda.localtunnel.me/suche.jameda-elements.de/${type}-new?query=${value}`;

    return dataFetcher(url);
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          selected={this.state.selected}
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

export default App;
