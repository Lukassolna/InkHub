export default function MovieView(props) {
  function addToFaveButton(evt) {
    return props.faveAdderFired();
  }

  function getButtonClass(isDisabled) {
    if (isDisabled) {
      return "search-button disabled";
    } else {
      return "search-button";
    }
  }
  function backToSearch() {
    if (props.toggleCheck === true) {
      window.location.hash = "#/movieresults";
    } else if (props.backWriterToggleCheck === true) {
      window.location.hash = "#/writer";
    } else {
      window.location.hash = "#/user";
    }
  }

  return (
    <tr>
      <td>
        <div class="movie-container">
          <img src={props.movieData.Poster} class="movie-poster"></img>
          <div class="movie-details">
            <p class="movieNameView">{props.movieData.Title}</p>
            <p>{props.movieData.Plot}</p>
            <p>Writer: {props.movieData.Writer}</p>
            <p>Director: {props.movieData.Director}</p>
            <p>IMDB rating: {props.movieData.imdbRating}</p>
          </div>
        </div>
        <button
          class={getButtonClass(props.isMovieInFaves)}
          disabled={props.isMovieInFaves}
          onClick={addToFaveButton}
        >
          Add to Favourites
        </button>
        <button class="search-button" onClick={backToSearch}>
          Back
        </button>
      </td>
    </tr>
  );
}
