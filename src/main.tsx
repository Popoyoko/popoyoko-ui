import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { TokensProvider } from "./contexts/TokensProvider";
import config from "../tokens-config/tokens-config";

ReactDOM.render(
  <React.StrictMode>
    <TokensProvider brand={config.brand}>
      <App />
    </TokensProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
