import useMatchMedia from "./hooks/useMatchMedia";
import { useState } from "react";
import logo_popoyoko from "/Logo-popoyoko.svg";
import "./App.css";
import React from "react";
import { Slider, Text, Card, Icon, Information, InputText, Avatar } from "./components";
import { Button } from "./components";
import { Ratio } from "./components";
import { InputSelect } from "./components/Inputs/Select";
import { InputRadio } from "./components/Inputs/Radio";
import { InputDate } from "./components/Inputs/Date";
import { InputSearch } from "./components/Inputs/Search";

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
            <Icon.ArrowRight size="small" />
            <Icon.ArrowRight size="medium" />
            <Icon.ArrowRight size="large" />
            <Icon.Add size="small" />
            <Icon.Add size="medium" />
            <Icon.Add size="large" />
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

                <InputRadio label="rtazeazeazef efesfe fefeqzdzd fefeazzaea zeazee" />

                <InputDate label="tzest"></InputDate>
              </div>
            </div>
            <Button.Primary label="Se connecter" typeSvg="none" />
          </div>
          <div className="FormSection">
            <h2>Pas encore de compte ?</h2>
            <Button.Secondary label="Créer un compte" typeSvg="none" />
            <Button.Tertiary typeSvg="only" ><Icon.Add size="large" /></Button.Tertiary>
   <Avatar.Cover showedit={true}></Avatar.Cover>
            <Slider>
  <Card.Default
    title="test"
    mention="mention"
    subTitle="subtitle"
    price={13}
  />
  <Card.Default
    title="test2"
    mention="mention2"
    subTitle="subtitle2"
    price={14}
  />
  <Card.Default
    title="test3"
    mention="mention3"
    subTitle="subtitle3"
    price={15}
  />
  <Card.Default
    title="test3"
    mention="mention3"
    subTitle="subtitle3"
    price={15}
  />
</Slider>

            <Button.Tertiary label="Créer un compte" typeSvg="none" />
          </div>

          <Card.Default
            title="test"
            mention="mention"
            subTitle="subtitle"
            price={13}
          />


          <Card.Media />

          <Text
            title="Description"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dui ac odio malesuada semper. Vivamus tincidunt elit velit, eget placerat quam ornare et. Proin maximus neque vel neque elementum, et elementum quam sagittis. Mauris ultricies magna nec diam vulputate lacinia. Proin aliquam velit id diam molestie interdum. Nam vel tellus viverra, mattis erat vitae, fringilla magna. Fusce in ligula eu lectus rutrum porta ac sed augue. Pellentesque in ex odio. Ut lobortis, massa vel lacinia bibendum, leo mi luctus diam, id mollis orci elit a felis. Sed pretium facilisis tortor, eu pulvinar justo euismod vitae. Duis dapibus lorem sit amet turpis dapibus, non accumsan ligula maximus. In sagittis massa lacus, et consequat nunc mattis vitae. Phasellus ac mauris nec leo luctus egestas. Etiam tristique orci nec mi posuere, non aliquet elit congue. Proin auctor justo elit, vitae interdum diam pretium vel."
          />

          <Card.Media/>
<InputSearch placeholder="Search..."></InputSearch>
          <Text title="Description" label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dui ac odio malesuada semper. Vivamus tincidunt elit velit, eget placerat quam ornare et. Proin maximus neque vel neque elementum, et elementum quam sagittis. Mauris ultricies magna nec diam vulputate lacinia. Proin aliquam velit id diam molestie interdum. Nam vel tellus viverra, mattis erat vitae, fringilla magna. Fusce in ligula eu lectus rutrum porta ac sed augue. Pellentesque in ex odio. Ut lobortis, massa vel lacinia bibendum, leo mi luctus diam, id mollis orci elit a felis. Sed pretium facilisis tortor, eu pulvinar justo euismod vitae. Duis dapibus lorem sit amet turpis dapibus, non accumsan ligula maximus. In sagittis massa lacus, et consequat nunc mattis vitae. Phasellus ac mauris nec leo luctus egestas. Etiam tristique orci nec mi posuere, non aliquet elit congue. Proin auctor justo elit, vitae interdum diam pretium vel."/>


          <Information label="tazeazd"></Information>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
