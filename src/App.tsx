import useMatchMedia from "./hooks/useMatchMedia";
import { useState } from "react";
import "./App.css";
import React from "react";
import {
  Icon,
} from "./components";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const isMobile = useMatchMedia("(max-width:700px)");

  return (
    <div className="App">
      <Button.Primary><Icon.Add/>Label</Button.Primary>
    </div>
  );
}

export default App;
