import React from 'react';

// material-ui imports
import { createTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

// Custom JSX components imports
import Header from './header/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      secondary: '#9e9e9e',
    },
    background: {
      default: '#141414',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header></Header>
      </ThemeProvider>
    </div>
  );
}

export default App;
