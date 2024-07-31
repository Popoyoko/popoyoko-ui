import useMatchMedia from "./hooks/useMatchMedia";
import { useState } from "react";
import "./App.css";
import React from "react";
import { Button, Icon, TestButton} from "./components";

function App() {
  return (
    <div className="App">
      <Button.Primary>
        <Icon.Add />
        Label
      </Button.Primary>
      <TestButton />
    </div>
  );
}

export default App;
