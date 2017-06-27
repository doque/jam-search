import React, { Component } from "react";
import Suggestions from "./Suggestions";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    data: {
      suggests: []
    }
  };

  componentWillMount() {
    this.fetchData();
  }

  changeHandler(event) {
    const value = event.target.value.trim();
    const type = event.target.name;

    if (value.length >= 3) {
      this.fetchData(value, type).then(data => this.setState({ data }));
    } else {
      this.setState({ data: { suggests: [] } });
    }
  }

  fetchData(value, type = "what") {
    return fetch(
      `https://jwwveyajhf.localtunnel.me/suche.jameda-elements.de/${type}-new?query=${value}`
    )
      .then(response => response.json())
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div className="App">
        <SearchBar changeHandler={this.changeHandler.bind(this)} />
        <Suggestions data={this.state.data} />
      </div>
    );
  }
}

export default App;
