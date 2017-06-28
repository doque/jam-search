import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./styles.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

import Search from "./components/Search";
import suggestions from "./reducers/search";

const store = createStore(suggestions);

ReactDOM.render(
  <Provider store={store}>
    <Search />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
