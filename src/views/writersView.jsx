import "animate.css";

export default function WritersView(props) {
  function back2search() {
    if (props.toggleCheck === true) {
      window.location.hash = "#/writersresults";
    } else {
      window.location.hash = "#/";
    }
  }

  function addToFaveButton(evt) {
    return props.faveWriterAdder(props.writerName);
  }
  function getButtonClass(isDisabled) {
    if (isDisabled) {
      return "search-button disabled";
    } else {
      return "search-button";
    }
  }

  function moviesCB(movie) {
    function resultClickACB(item) {
      return props.movieClick(movie.imdbID);
    }

    return (
      <table onClick={resultClickACB} class="topalign searchresultHOV">
        <td>
          <img src={movie.Poster} height={"100"} width={"70"}></img>
        </td>
        <td>
          <table>
            <tr class="titletext">{movie.Title}</tr>
          </table>
        </td>
      </table>
    );
  }

  return (
    <div>
      <table>
        <tr>
          <img class="movie-poster" src={props.writerPic} height={"200"}></img>
          <th class="writerInfos">
            <td>{props.writerName} </td>
            <tr>{props.writerMovies.map(moviesCB)}</tr>
          </th>
        </tr>
      </table>

      <button
        className={getButtonClass(props.isWriterInFaves)}
        disabled={props.isWriterInFaves}
        onClick={addToFaveButton}
      >
        Add to Favourites
      </button>
      <button class="search-button" onClick={back2search}>
        Back
      </button>
    </div>
  );
}
