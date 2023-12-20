import SearchResultView from "../views/searchResultView";

export default function SearchResult(props) {
  function chooseMovieACB(movie) {
    props.model.setCurrentMovie(movie);
  }
  function updateTextACB(query) {
    props.model.setSearchQuery(query);
  }
  function doSearchACB() {
    props.model.searchMovie(props.model.searchname);
  }

  return (
    <SearchResultView
      movieClick={chooseMovieACB}
      movieResults={props.model.searchResults}
      oldSearch={props.model.searchname}
      currentText={updateTextACB}
      searchFired={doSearchACB}
    />
  );
}
