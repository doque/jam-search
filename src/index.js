import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./styles.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

import SearchConnected from "./components/Search";
import suggestions from "./reducers/search";

const store = createStore(
  suggestions,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <SearchConnected />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
