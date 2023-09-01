import useMatchMedia from "./hooks/useMatchMedia";
import { useState } from "react";
import logo_popoyoko from "/Logo-popoyoko.svg";
import "./App.css";
import React from "react";
import { InputText } from "./components";
import { Button } from "./components";
import { Ratio } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const isMobile = useMatchMedia("(max-width:700px)");

  return (
    <div className="App">
      {/* Practolib test */}
      {isMobile ? (
        <div className="Login">
          <div className="Logo">
            <a href="http://localhost:6006/" target="_blank">
              <img src={logo_popoyoko} className="logo popoyoko" />
            </a>
          </div>

          <div className="FormSection">
            <h2>Connexion</h2>
            <div className="FormGroup">
              <div className="Text">
                <p>Email</p>
                <InputText placeholder="placeholder" />
              </div>
              <div className="Text">
                <p>Mot de passe</p>
                <InputText placeholder="placeholder" />
              </div>
            </div>
            <Button.Primary
              label="Se connecter"
              onClick={() => {}}
              typeSvg="none"
            />
          </div>
          <div className="FormSection">
            <h2>Pas encore de compte ?</h2>
            <Button.Secondary label="Créer un compte" typeSvg="none" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
