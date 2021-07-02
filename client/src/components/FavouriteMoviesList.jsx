import { Component } from 'react';

class FavouriteMoviesList extends Component {
  constructor() {
    super();
    this.state = {
      favouriteMoviesList: [],
    };
  }

  componentDidMount() {
    fetch('./favourite-movies-list.json').then((favouriteMoviesList) =>
      this.setState({ favouriteMoviesList }, () =>
        console.log(favouriteMoviesList)
      )
    );
  }

  render() {
    return (
      <div>
        <p>{this.state.favouriteMoviesList}</p>
      </div>
    );
  }
}

export default FavouriteMoviesList;
