import React, { useState, useEffect } from 'react';

// Custom JSX components imports
import MovieCard from './movie_card/MovieCard';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  movieGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}));

function FavouriteMovies() {
  const classes = useStyles();

  const [favouriteMovies, setFavouriteMovies] = useState([]);

  function sortByKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x > y ? -1 : x < y ? 1 : 0;
    });
  }

  useEffect(() => {
    getFavouriteMoviesList();
  });

  const getFavouriteMoviesList = async () => {
    const response = await fetch('favourite-movies-list');
    const jsonData = await response.json();
    setFavouriteMovies(sortByKey(jsonData, 'imdbRating'));
  };

  return (
    <div>
      <Grid container className={classes.movieGrid}>
        {favouriteMovies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </Grid>
    </div>
  );
}

export default FavouriteMovies;
