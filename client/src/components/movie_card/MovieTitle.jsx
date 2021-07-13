import React from 'react';

// material-ui imports
import Typography from '@material-ui/core/Typography';

function MovieTitle(props) {
  return (
    <div>
      <Typography>
        {props.title.length < 21 ? (
          <strong style={{ fontSize: '18px' }}>{props.title}</strong>
        ) : (
          <strong style={{ fontSize: '12px' }}>{props.title}</strong>
        )}
      </Typography>
    </div>
  );
}

export default MovieTitle;
