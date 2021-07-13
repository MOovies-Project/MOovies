import React from 'react';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  starIcon: {
    color: '#FFA500',
    verticalAlign: 'top',
    display: 'inline-flex',
  },
  dotSeparator: {
    color: '#5C636E',
  },
}));

function MovieInfo(props) {
  const classes = useStyles();

  function getRuntimeToString(runtime) {
    const hour = Math.floor(runtime / 60);
    const min = runtime % 60;

    return `${hour}h ${min}min`;
  }

  function getGenreFromCode(genreCode) {
    switch (genreCode) {
      case 1:
        return 'Biography';
      case 2:
        return 'Film Noir';
      case 3:
        return 'Game Show';
      case 4:
        return 'Musical';
      case 5:
        return 'Sport';
      case 6:
        return 'Short';
      case 7:
        return 'Adult';
      case 12:
        return 'Adventure';
      case 14:
        return 'Fantasy';
      case 16:
        return 'Animation';
      case 18:
        return 'Drama';
      case 27:
        return 'Horror';
      case 28:
        return 'Action';
      case 35:
        return 'Comedy';
      case 36:
        return 'History';
      case 37:
        return 'Western';
      case 53:
        return 'Thriller';
      case 80:
        return 'Crime';
      case 99:
        return 'Documentary';
      case 878:
        return 'Sci-Fi';
      case 9648:
        return 'Mystery';
      case 10402:
        return 'Music';
      case 10749:
        return 'Romance';
      case 10751:
        return 'Family';
      case 10752:
        return 'War';
      case 10763:
        return 'News';
      case 10764:
        return 'Reality';
      case 10767:
        return 'Talk Show';
      default:
        return '';
    }
  }

  return (
    <div>
      {/* Rating, Year and Runtime */}
      <Typography style={{ fontSize: '12px' }}>
        <StarIcon fontSize='small' className={classes.starIcon} />
        <strong>{(props.imdbRating / 10).toFixed(1)}</strong>{' '}
        <span className={classes.dotSeparator}>•</span> {props.year}{' '}
        <span className={classes.dotSeparator}>•</span>{' '}
        {getRuntimeToString(props.runtime)}
      </Typography>

      {/* Genre */}
      <Typography style={{ fontSize: '10px' }}>
        {props.genres.map((genreCode, index) => {
          return (
            <span>
              {getGenreFromCode(genreCode)}{' '}
              {index === props.genres.length - 1 ? (
                ''
              ) : (
                <span className={classes.dotSeparator}> • </span>
              )}
            </span>
          );
        })}
      </Typography>
    </div>
  );
}

export default MovieInfo;
