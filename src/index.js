import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./scss/main.scss";
import { checkAuth } from "./helpers/helpers";

checkAuth();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
