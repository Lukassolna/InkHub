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
        <table class=" searchresultHOV">
            <tr>
            <td onClick={clickMovieACB}>
          
            <td >
              <img src={movies.data.Poster} height="100"></img> 
              </td>
              <td class="topalign">
              <tr class="titletext" onClick={clickMovieACB}>
              {movies.data.Title}
              </tr>
              
              <tr class="writertext" > {"Writers: " + movies.data.Writer}</tr>
              
              </td>
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
      <div class="searchresultHOV">
        <td onClick={writerClickACB} class="alignright">
          <img class="writeritemFave"src={writerPictures[nameToNumber(writer)]}alt="Poster 1"></img>
        </td>
          <td class="titletext" onClick={writerClickACB}>{writer}</td>
        
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
      </div>
    );
  }

  return (
    <div>
      <table >
        <tr>
          <th class="writerInfos">Favorite Movies:</th>
          <th class="writerInfos"> Favorite Writers:</th>
        </tr>
        <tr class="topalign">
          <td width={"500"}>{props.favouriteMovies.map(mapMoviesCB)}</td>
          <td width={"500"}>{props.favouriteWriters.map(mapWritersCB)}</td>
        </tr>
      </table>
      <button class="search-button" onClick={backToHome}>
        Back to Home
      </button>
    </div>
  );
}
