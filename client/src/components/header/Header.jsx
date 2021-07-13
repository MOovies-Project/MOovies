import React from 'react';

// Custom JSX components imports
import Title from './Title';
import Countries from './Countries';
import Platforms from './Platforms';
import Genres from './Genres';
import Filters from './Filters';
import CreatorsFavourite from './CreatorsFavourite';
import Search from './Search';

// material-ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function Header() {
  return (
    <div>
      <AppBar position='static' color='transparent' elevation={4}>
        <Toolbar>
          <Title />
          <Countries />
          <Platforms />
          <Genres />
          <Filters />
          <CreatorsFavourite />
          <Search />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
