import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { loadTokens } from '../tokens-config/loadTokens';

const init = async () => {
  const tokens = await loadTokens(require('../../tokens.config.js'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
};

init();