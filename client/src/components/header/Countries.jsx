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

function Countries() {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const supportedCountries = [
    {
      name: 'Canada',
      value: 'ca',
    },
    {
      name: 'United States',
      value: 'us',
    },
  ];

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
        Countries
        <ArrowDropDownIcon />
      </Button>
      <Popper
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
                  {supportedCountries.map((country) => {
                    return (
                      <MenuItem
                        value={country.value}
                        className={classes.menuOption}
                        onClick={handleClose}
                      >
                        {country.name}
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

export default Countries;
