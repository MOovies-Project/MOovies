import React from 'react';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  moviePoster: {
    width: 225,
    height: 356,
  },
}));

function MoviePoster(props) {
  const classes = useStyles();

  return (
    <div>
      <CardMedia
        onClick={() =>
          (window.location.href = `https://www.imdb.com/title/${props.imdbID}/`)
        }
        className={classes.moviePoster}
        key={props.imdbId}
        image={props.posterURL}
        component='img'
        alt={props.title}
      />
    </div>
  );
}

export default MoviePoster;
