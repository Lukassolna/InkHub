import MovieView from "../views/movieView";
import { fetchMovieData } from "../movieSource";

export default function Movie(props) {
  function addToFavesACB() {
    props.model.addToFavourites(props.model.currentMovie);
  }

  function checkFavesACB(movie) {
    return movie === props.model.currentMovie;
  }

  if (!props.model.currentMoviePromiseState) {
    return <td>no data</td>;
  }
  if (!props.model.currentMoviePromiseState.promise) {
    return <td>no data</td>;
  }

  if (
    !props.model.currentMoviePromiseState.data &&
    !props.model.currentMoviePromiseState.error
  ) {
    return (
      <img
        src={
          "https://static.wikia.nocookie.net/dont-starve-game/images/8/84/Tumbleweed_move_down.gif"
        }
      ></img>
    );
  }
  if (props.model.currentMoviePromiseState.error) {
    return <td> {props.model.currentMoviePromiseState.error}</td>;
  }

  return (
    <MovieView
      movieData={props.model.currentMoviePromiseState.data}
      faveAdderFired={addToFavesACB}
      isMovieInFaves={props.model.favouriteMoviesIDS.find(checkFavesACB)}
      toggleCheck={props.model.moviesToggle}
      backWriterToggleCheck={props.model.backWriterToggle}
    />
  );
}
