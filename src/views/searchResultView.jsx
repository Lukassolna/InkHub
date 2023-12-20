export default function SearchResultView(props) {
  function backToHome() {
    window.location.hash = "#/";
  }

  function searchText(evt) {
    return props.currentText(evt.target.value);
  }

  function searchButton(evt) {
    return props.searchFired();
  }

  function keyDown(e) {
    if (e.keyCode === 13) {
      searchText(e);

      searchButton();
    }
  }

  function resultsCB(movies) {
    function resultClickACB(evt) {
      props.movieClick(movies[3]);
      window.location.hash = "#/movie";
    }

    return (
      <table onClick={resultClickACB} class="movieresult searchresultHOV" >
        <td>
          <img src={movies[1]} height={"200"}></img >
        </td>
        <td>
          <table>
            <tr class="titletext">{movies[0]}</tr>
            <tr class="writertext"> {"Writers: " + movies[2]}</tr>
          </table>
        </td>
      </table>
    );
  }

  return (
    <div class="">
      <div class="header">
        <input
          placeholder="Search..."
          class="search-bar"
          value={props.oldSearch}
          onChange={searchText}
          onkeydown={keyDown}
        ></input>
        <button class="search-button" onClick={searchButton}>
          Search!
        </button>
        <button class="search-button" onClick={backToHome}>
          Back to Home
        </button>
      </div>

      <div class="writertext" >
        {props.movieResults.length > 0
          ? props.movieResults.map(resultsCB)
          : "No Results Found"}
      </div>
    </div>
  );
}
