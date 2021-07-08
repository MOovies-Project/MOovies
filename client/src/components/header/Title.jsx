import React from 'react';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    marginRight: 40,
    fontWeight: 700,
  },
}));

function Title() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant='h5' className={classes.title}>
        MOovies
      </Typography>
    </div>
  );
}

export default Title;
