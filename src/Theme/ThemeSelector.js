import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Theme';


interface ThemeSelectorProps {
  children: JSX.Element | JSX.Element[];
}

const ThemeSelector = ({ children }: ThemeSelectorProps): JSX.Element => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeSelector;