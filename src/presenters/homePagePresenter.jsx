import HomePageView from "../views/homePageView";

export default function HomePage(props) {
  genWriter();

  function chosenWriterACB(writer) {
    props.model.setCurrentWriter(writer);
    props.model.searchMovieByWriter(writer);
    props.model.setWritersToggleFalse();
    props.model.setMoviesToggleFalse();
    props.model.setBackWriterToggleTrue();
    window.location.hash = "#/writer";
  }
  function updateTextACB(query) {
    props.model.setSearchQuery(query);
    props.model.setSearchWriterQuery(query);
  }
  function doSearchACB() {
    props.model.generatedWriterList = [];

    if (props.model.searchOption === 1) {
      props.model.setMoviesToggleTrue();
      props.model.searchMovie(props.model.searchname);
      window.location.hash = "#/movieresults";
    }

    if (props.model.searchOption === 2) {
      props.model.setWritersToggleTrue();
      props.model.searchWriters(props.model.searchWriter);
      window.location.hash = "#/writersresults";
    }
  }

  function setMoviesOptionACB() {
    props.model.searchOption = 1;
  }

  function setWritersOptionACB() {
    props.model.searchOption = 2;
  }

  function genWriter() {
    if (!props.model.generatedWriterList) {
      props.model.generatedWriterList = props.model.generateListOfWriters();
    }
  }

  return (
    <div>
      <HomePageView
        writerClick={chosenWriterACB}
        writeText={updateTextACB}
        searchFired={doSearchACB}
        moviesSelect={setMoviesOptionACB}
        writersSelect={setWritersOptionACB}
        currentOption={props.model.searchOption}
        currentText={props.model.searchname}
        randomWriters={props.model.generateListOfWriters()}
        homePageData={props.model.appStartPromiseState.data}
      />
    </div>
  );
}
