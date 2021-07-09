import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function FavouriteMovies() {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    getFavouriteMoviesList();
  }, []);

  const getFavouriteMoviesList = async () => {
    const response = await fetch('favourite-movies-list');
    const jsonData = await response.json();
    setFavouriteMovies(jsonData);
  };

  return (
    <div>
      <CardActionArea>
        {favouriteMovies.map((movie) => {
          return (<img src={movie.posterURL} alt={movie.title} width='154' height='231'/>);
        })}
      </CardActionArea>
    </div>
  );
}

export default FavouriteMovies;
