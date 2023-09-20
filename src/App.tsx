import useMatchMedia from "./hooks/useMatchMedia";
import { useState } from "react";
import logo_popoyoko from "/Logo-popoyoko.svg";
import "./App.css";
import React from "react";
import { Card, Icon, Information, InputText } from "./components";
import { Button } from "./components";
import { Ratio } from "./components";
import { InputSelect } from "./components/Inputs/Select";
import { InputRadio } from "./components/Inputs/Radio";
import { InputDate } from "./components/Inputs/Date";

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
            <Icon.ArrowRight size="small"/>
          <Icon.ArrowRight size="medium"/>
          <Icon.ArrowRight size="large"/>
          <Icon.Add size="small"/>
          <Icon.Add size="medium"/>
          <Icon.Add size="large"/>
          </div>

          <div className="FormSection">
            <h2>Connexion</h2>
            <div className="FormGroup">
              <div className="Text">
                <p>Email</p>
                <InputText label="email" placeholder="placeholder" />
              </div>
              <div className="Text">
                <p>Mot de passe</p>
                <InputText label="Mot de passe" placeholder="placeholder" />

                <InputSelect
                  label="Sélectionnez aze"
                  options={["Option 1", "Option 2", "Option 3"]}
                />

                <InputRadio label="rtazeazeazef efesfe fefeqzdzd fefeazzaea zeazee"/>

                <InputDate label="tzest"></InputDate>
              </div>
            </div>
            <Button.Primary label="Se connecter" typeSvg="none" />
          </div>
          <div className="FormSection">
            <h2>Pas encore de compte ?</h2>
            <Button.Secondary label="Créer un compte" typeSvg="none" />
            <Button.Tertiary label="Créer un compte" typeSvg="none" />
          </div>
          
          <Card.Default title="test" mention="mention" subTitle="subtitle" price={13}/>

          <Information label="tazeazd"></Information>
          

        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
