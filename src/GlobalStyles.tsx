import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Co Headline";
    src: url("../fonts/Co_Headline_Regular.otf");
    font-weight: normal;
  }

  @font-face {
    font-family: "Co Headline";
    src: url("../fonts/Co_Headline_Bold.otf");
    font-weight: bold;
  }

  @font-face {
    font-family: "Co Headline";
    src: url("../fonts/Co_Headline_Light.otf");
    font-weight: lighter;
  }

  /* Autres styles globaux si nécessaire */
`;

export default GlobalStyles;
