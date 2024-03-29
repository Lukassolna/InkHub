import WritersView from "../views/writersView";
import moviesToModel from "../firebaseModel.js";
import { writerPictures, nameToNumber } from "../writerpictures.js";

export default function Writers(props) {
  function chooseWriterMovieACB(movie) {
    props.model.setCurrentMovie(movie);
    window.location.hash = "#/movie";
  }
  function add2FaveWriterACB(writer) {
    props.model.addWriter2Fave(writer);
  }
  let num = nameToNumber(props.model.currentWriter);

  return (
    <WritersView
      writerMovies={props.model.searchWriterResults}
      toggleCheck={props.model.writersToggle}
      movieClick={chooseWriterMovieACB}
      isWriterInFaves={props.model.faveWriters.includes(
        props.model.currentWriter
      )}
      faveWriterAdder={add2FaveWriterACB}
      writerName={props.model.currentWriter}
      writerPic={writerPictures[num]}
    />
  );
}
