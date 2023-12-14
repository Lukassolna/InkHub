import WritersView from "../views/writersView";
import moviesToModel from "../firebaseModel.js"
import { writerPictures, nameToNumber } from "../writerpictures.js";


export default
function Writers(props){

    function chooseWriterMovieACB(movie){
        console.log(movie)
        props.model.setCurrentMovie(movie)
        window.location.hash="#/movie"
    }
    let num = nameToNumber(props.model.currentWriter)



    return <WritersView writerMovies={props.model.searchWriterResults} toggleCheck ={props.model.writersToggle} 
    movieClick={chooseWriterMovieACB} writerName={props.model.currentWriter} writerPic={writerPictures[num]}/>;
}

    
    
       
    