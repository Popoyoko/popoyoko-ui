import useMatchMedia from "./hooks/useMatchMedia";
import { useState } from "react";
import logo_popoyoko from "/Logo-popoyoko.svg";
import "./App.css";
import React from "react";
import {
  Slider,
  Text,
  Card,
  Icon,
  Information,
  InputText,
  Avatar,
  Header,
  Logo,
  Section,
} from "./components";
import { Button } from "./components";
import { Ratio } from "./components";
import { InputSelect } from "./components/Inputs/Select";
import { InputRadio } from "./components/Inputs/Radio";
import { InputDate } from "./components/Inputs/Date";
import { InputSearch } from "./components/Inputs/Search";
import { InputDownload } from "./components/Inputs/Download";
import { InputUpload } from "./components/Inputs/Upload";
import { Stepper } from "./components/Stepper";

function App() {
  const [count, setCount] = useState(0);
  const isMobile = useMatchMedia("(max-width:700px)");

  return (
    <div className="App">
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

          <Avatar.Small showbadge={true} background={logo_popoyoko} onClick={() => console.log("Avatar Small")}></Avatar.Small>
          <Avatar.Cover showedit={true}></Avatar.Cover>

          <Button.Primary label="Button Primary" typeSvg="none" onClick={() => {console.log("Bouton cliqué !");}}/>
          <Button.Primary label="Button Primary" typeSvg="right"><Icon.Add size="large" />-</Button.Primary>
          <Button.Primary label="Button Primary" typeSvg="only"><Icon.Add size="large" /></Button.Primary>

          <Button.Secondary label="Button Secondary" typeSvg="none" onClick={() => {console.log("Bouton cliqué !");}}/>
          <Button.Secondary label="Button Secondary" typeSvg="right"><Icon.Add size="large" /></Button.Secondary>
          <Button.Secondary typeSvg="only"><Icon.Add size="large" /></Button.Secondary>

          <Button.Tertiary label="Button Tertiary" typeSvg="none" onClick={() => {console.log("Bouton cliqué !");}}/>
          <Button.Tertiary label="Button Tertiary" typeSvg="right"><Icon.Add size="large" /></Button.Tertiary>
          <Button.Tertiary typeSvg="only"><Icon.Add size="large" /></Button.Tertiary>

          <Card.Default
            title="test"
            mention="mention"
            subTitle="subtitle"
            price={13}
          />

          <Card.Media />

          <Header logoBackground={logo_popoyoko}/>

          <Information label="Information"></Information>
          <Stepper total={5} current={3} title="stepper"></Stepper>
          <InputDate label="Input Date"></InputDate>
          
          <br/>
          <InputUpload label="Input Upload"></InputUpload>
          <br/>
          <InputDownload label="Input Download" icon="right"/>

          <InputRadio label="Input Radio" checked={true}/>

          <InputRadio label="Input Radio Grouped" checked={true} name="test"/>
          <InputRadio label="Input Radio Grouped" checked={true} name="test"/>
          <InputRadio label="Input Radio Grouped" checked={true} name="test"/>

          <InputSearch placeholder="Input Search..."></InputSearch>

          <InputSelect
            label="Input Select"
            options={[{label:"aze", value:2133}, "Option 2", "Option 3"]}
          />

          <InputText label="Input Text" placeholder="Text"/>
          <InputText label="Input Text" type="password" placeholder="Password" />

          <Logo background="logo"></Logo>

          <Section title="Titre" label="Label"></Section>

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

          <Text title="Text" label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dui ac odio malesuada semper. Vivamus tincidunt elit velit, eget placerat quam ornare et. Proin maximus neque vel neque elementum, et elementum quam sagittis. Mauris ultricies magna nec diam vulputate lacinia. Proin aliquam velit id diam molestie interdum. Nam vel tellus viverra, mattis erat vitae, fringilla magna. Fusce in ligula eu lectus rutrum porta ac sed augue. Pellentesque in ex odio. Ut lobortis, massa vel lacinia bibendum, leo mi luctus diam, id mollis orci elit a felis. Sed pretium facilisis tortor, eu pulvinar justo euismod vitae. Duis dapibus lorem sit amet turpis dapibus, non accumsan ligula maximus. In sagittis massa lacus, et consequat nunc mattis vitae. Phasellus ac mauris nec leo luctus egestas. Etiam tristique orci nec mi posuere, non aliquet elit congue. Proin auctor justo elit, vitae interdum diam pretium vel."/>
        </div>
    </div>
  );
}

export default App;
