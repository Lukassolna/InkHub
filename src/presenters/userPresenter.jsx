import UserView from "../views/userView";

export default function User(props) {
  function chosenWriterACB(writer) {
    props.model.setCurrentWriter(writer);
    props.model.searchMovieByWriter(writer);
    props.model.setWritersToggleFalse();
    props.model.setMoviesToggleFalse();
    props.model.setBackWriterToggleFalse();
    window.location.hash = "#/writer";
  }
  function removeItNow(id) {
    props.model.removeFromFaves(id);
  }
  function removeWriterNow(writer) {
    props.model.removeFromFaveWriters(writer);
  }
  function chooseUserMovieACB(movie) {
    props.model.setMoviesToggleFalse();
    props.model.setBackWriterToggleFalse();

    props.model.setCurrentMovie(movie);
    window.location.hash = "#/movie";
  }

  return (
    <UserView
      writerClick={chosenWriterACB}
      favouriteMovies={props.model.faveMovies}
      removeMovie={removeItNow}
      favouriteWriters={props.model.faveWriters}
      removeWriter={removeWriterNow}
      movieClicked={chooseUserMovieACB}
    />
  );
}
