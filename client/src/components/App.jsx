import React from 'react';

// Custom JSX components imports
import Header from './header/Header';
import FavouriteMovies from './FavouriteMovies';
import Footer from './Footer';

// material-ui imports
import { createTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

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
        <Header />

        {/* Disclaimer message */}
        <Typography
          color='textSecondary'
          align='center'
          style={{ marginTop: 10, fontSize: 12 }}
        >
          ** Filters and Search features are currently in development **
        </Typography>

        <FavouriteMovies />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
