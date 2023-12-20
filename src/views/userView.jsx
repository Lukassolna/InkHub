import { writerPictures, nameToNumber } from "../writerpictures";
export default function UserView(props) {
  function backToHome() {
    window.location.hash = "#/";
  }

  function mapMoviesCB(movies) {
    function reMovieACB() {
      props.removeMovie(movies.data.imdbID);
    }
    function clickMovieACB() {
      props.movieClicked(movies.data.imdbID);
    }

    if (movies.data) {
      return (
        <table>
          <tr>
            <td onClick={clickMovieACB} class="searchresultHOV">
              <img src={movies.data.Poster} height="100"></img>
              {movies.data.Title}
            </td>
            <td class="alignright">
              <img
                class="pointerhover"
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/c/cc/Cross_red_circle.svg"
                }
                height="30"
                onClick={reMovieACB}
              ></img>
            </td>
          </tr>
        </table>
      );
    }
  }

  function mapWritersCB(writer) {
    function reWriterACB() {
      props.removeWriter(writer);
    }
    function writerClickACB(evt) {
      props.writerClick(writer);
    }
    return (
      <tr>
        <td onClick={writerClickACB} class="searchresultHOV">
          <img
            class="writeritemFave"
            src={writerPictures[nameToNumber(writer)]}
            alt="Poster 1"
          ></img>
          {writer}
        </td>
        <td class="alignright">
          <img
            class="pointerhover"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/c/cc/Cross_red_circle.svg"
            }
            height="30"
            onClick={reWriterACB}
          ></img>
        </td>
      </tr>
    );
  }

  return (
    <div>
      <button class="search-button" onClick={backToHome}>
        Back to Home
      </button>
      <table>
        <tr>
          <th class="generalText">Favorite Movies:</th>
          <th class="generalText"> Favorite Writers:</th>
        </tr>
        <tr class="topalign">
          <td width={"500"}>{props.favouriteMovies.map(mapMoviesCB)}</td>
          <td width={"500"}>{props.favouriteWriters.map(mapWritersCB)}</td>
        </tr>
      </table>
    </div>
  );
}
