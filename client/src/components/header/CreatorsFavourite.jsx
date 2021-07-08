import React from 'react';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  menuOptionTitle: {
    color: '#FFA500',
    fontSize: 15,
    textTransform: 'none',
  },
}));

function CreatorsFavourite() {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.menuOptionTitle}>
        Creator's Favourite 100
      </Button>
    </div>
  );
}

export default CreatorsFavourite;
