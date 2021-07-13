import React from 'react';

// Custom JSX components imports
import MoviePoster from './MoviePoster';
import MovieTitle from './MovieTitle';
import MovieInfo from './MovieInfo';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  movieCard: {
    justifyContent: 'space-between',
    backgroundColor: '#181818',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));

function MovieCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.movieCard} align='center' elevation={8}>
        <MoviePoster
          imdbID={props.movie.imdbID}
          posterURL={props.movie.posterURL}
          title={props.movie.title}
        />
        <CardContent style={{ padding: '2px' }}>
          <MovieTitle title={props.movie.title} />
          <MovieInfo
            imdbRating={props.movie.imdbRating}
            year={props.movie.year}
            runtime={props.movie.runtime}
            genres={props.movie.genres}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default MovieCard;
