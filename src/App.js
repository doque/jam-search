import React, { Component } from "react";
require("es6-promise").polyfill();
require("isomorphic-fetch");

class App extends Component {
  state = {
    data: {
      suggests: []
    }
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(
      "https://glxmojvuyt.localtunnel.me/suche.jameda-elements.de/what-new?query=Zahnar&echo=Zahnar"
    )
      .then(response => response.json())
      .then(json => this.setState({ data: json }))
      .catch(e => console.log(e));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        {data.suggests.map(suggest =>
          <div>
            <h2>{suggest.header}</h2>
            <ul>
              {suggest.list.map(item => <li>{item.term}</li>)}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
