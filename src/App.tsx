import useMatchMedia from "./hooks/useMatchMedia";
import { useState } from "react";
import "./App.css";
import React from "react";
import {
  Icon,
  TestButton,
} from "./components";
import { Button } from "./components";
import { Header } from "./components";

function App() {
  const brand = "Popoyoko";

  return (
    <div className="App">
      <Button.Primary><Icon.Add/>Label</Button.Primary>
      <TestButton brand={brand} />
    </div>
  );
}

export default App;
