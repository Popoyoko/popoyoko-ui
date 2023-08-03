import { useState } from "react";
import logo_popoyoko from "/Logo-popoyoko.svg";
import "./App.css";
import React from "react";
// import Card from "./components/Card";
import Avatar from "./components/Avatar";

import { Information } from "./components/Information";
import { Icon } from "./components/Icon";

import Button from "./components/Button";
import { Header } from "./components";
// import { Search } from "./Icons";
import { InputDate } from "./components/Inputs/Date";
import { InputText } from "./components/Inputs/Text";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="http://localhost:6006/" target="_blank">
          <img src={logo_popoyoko} className="logo popoyoko" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        {/* <Button label="Click me!" onClick={() => alert('Hello world!')} backgroundColor="#f00"></Button>

        <Card background="url(https://imgs.search.brave.com/KUc_Sjgkt3SuouS7E-9zbhV2YGG7MFpPmcNklJmJYu0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ib25q/b3VybmF0dXJlLmZy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9pbWFn/ZS1wYXlzYWdlLWdy/YXR1aXRlLWEtdGVs/ZWNoYXJnZXItNS5q/cGc)"/>

        <Card label="label" subTitle="subtitle" mention="mention" price={56} background="url(https://imgs.search.brave.com/KUc_Sjgkt3SuouS7E-9zbhV2YGG7MFpPmcNklJmJYu0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ib25q/b3VybmF0dXJlLmZy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9pbWFn/ZS1wYXlzYWdlLWdy/YXR1aXRlLWEtdGVs/ZWNoYXJnZXItNS5q/cGc)"/> */}
        {/* <Avatar></Avatar>²
<Avatar small></Avatar> */}
        <Avatar.Small showbadge />
        <Icon.Add />
        <Icon.AddPicture size="small" />
        <Icon.ArrowBottom size="large" />

        <Information></Information>
        <Avatar.Cover showedit/>
<Information></Information>
<Button.Primary label="Primary Button" typeSvg="none"/>
<Button.Secondary label="Primary Button" typeSvg="none"/>
<Button.Tertiary label="Primary Button" typeSvg="none"/>
<Header></Header>
        {/* <Icons.Information></Icons.Information> doesnt work*/}
        <InputDate
          placeholder="Saisissez une date"
          srcIcon="chemin/vers/mon-icon.svg"
          onClick={() => {
            // Gérer l'événement onClick ici
          }}
        />
        <InputText placeholder="test"></InputText>
      </div>
    </div>
  );
}

export default App;
