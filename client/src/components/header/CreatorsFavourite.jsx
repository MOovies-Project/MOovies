import React from 'react';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  menuOptionTitle: {
    borderColor: '#B37300',
    color: '#FFA500',
    fontSize: 15,
    textTransform: 'none',
  },
}));

function CreatorsFavourite() {
  const classes = useStyles();

  return (
    <div>
      <Button variant='outlined' className={classes.menuOptionTitle}>
        Favourite 100
      </Button>
    </div>
  );
}

export default CreatorsFavourite;
