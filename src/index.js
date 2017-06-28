import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search";
import registerServiceWorker from "./registerServiceWorker";
import "./styles.css";

ReactDOM.render(<Search />, document.getElementById("root"));
registerServiceWorker();
