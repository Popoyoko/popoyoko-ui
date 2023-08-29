import { useState } from "react";
import logo_popoyoko from "/Logo-popoyoko.svg";
import "./App.css";
import React from "react";
import { InputText } from "./components";
import { Button } from "./components";
import { Ratio } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="http://localhost:6006/" target="_blank">
          <img src={logo_popoyoko} className="logo popoyoko" />
        </a>
      </div>

      {/* Practolib test */}
      <Ratio.L1H1>
        <InputText placeholder="placeholder" />

        <InputText placeholder="placeholder" />

        <Button.Primary
          label="Se connecter"
          onClick={() => {}}
          typeSvg="none"
        />

        <Button.Tertiary label="Créer un compte" typeSvg="none" />
      </Ratio.L1H1>
    </div>
  );
}

export default App;
