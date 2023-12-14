import WritersView from "../views/writersView";
import moviesToModel from "../firebaseModel.js"


export default
function Writers(props){

    function chooseWriterMovieACB(movie){
        console.log(movie)
        props.model.setCurrentMovie(movie)
        window.location.hash="#/movie"
        

    }



   
        
       
    return <WritersView writerMovies={props.model.searchWriterResults} toggleCheck ={props.model.writersToggle} movieClick={chooseWriterMovieACB} currentWriter={props.model.currentWriter} />;
}

    
    
       
    