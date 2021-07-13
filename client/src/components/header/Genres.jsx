import React from 'react';

// material-ui imports
import { alpha, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  menuOptionTitle: {
    color: '#C0C0C0',
    fontSize: 15,
    textTransform: 'none',
  },
  menuOption: {
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
}));

function Genres() {
  const classes = useStyles();

  const supportedGenres = [
    {
      name: 'All',
      value: '0',
    },
    {
      name: 'Biography',
      value: '1',
    },
    {
      name: 'Film Noir',
      value: '2',
    },
    {
      name: 'Game Show',
      value: '3',
    },
    {
      name: 'Musical',
      value: '4',
    },
    {
      name: 'Sport',
      value: '5',
    },
    {
      name: 'Short',
      value: '6',
    },
    {
      name: 'Adult',
      value: '7',
    },
    {
      name: 'Adventure',
      value: '12',
    },
    {
      name: 'Fantasy',
      value: '14',
    },
    {
      name: 'Animation',
      value: '16',
    },
    {
      name: 'Drama',
      value: '18',
    },
    {
      name: 'Horror',
      value: '27',
    },
    {
      name: 'Action',
      value: '28',
    },
    {
      name: 'Comedy',
      value: '35',
    },
    {
      name: 'History',
      value: '36',
    },
    {
      name: 'Western',
      value: '37',
    },
    {
      name: 'Thriller',
      value: '53',
    },
    {
      name: 'Crime',
      value: '80',
    },
    {
      name: 'Documentary',
      value: '99',
    },
    {
      name: 'Sci-Fi',
      value: '878',
    },
    {
      name: 'Mystery',
      value: '9648',
    },
    {
      name: 'Music',
      value: '10402',
    },
    {
      name: 'Romance',
      value: '10749',
    },
    {
      name: 'Family',
      value: '10751',
    },
    {
      name: 'War',
      value: '10752',
    },
    {
      name: 'News',
      value: '10763',
    },
    {
      name: 'Reality',
      value: '10764',
    },
    {
      name: 'Talk Show',
      value: '10767',
    },
  ];

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div>
      <Button
        className={classes.menuOptionTitle}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        endIcon
        onClick={handleToggle}
      >
        Genres
        <ArrowDropDownIcon />
      </Button>
      <Popper
        style={{ maxHeight: 200, overflow: 'auto' }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper style={{ backgroundColor: '#212121' }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                  {supportedGenres.map((genre) => {
                    return (
                      <MenuItem
                        value={genre.value}
                        className={classes.menuOption}
                        onClick={handleClose}
                      >
                        {genre.name}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default Genres;
