import WritersView from "../views/writersView";
import moviesToModel from "../firebaseModel.js"


export default
function Writers(props){

    function chooseWriterMovieACB(movie){
        console.log(movie)
        props.model.setCurrentMovie(movie)
        window.location.hash="#/movie"
    
    }
    function add2FaveWriterACB(writer){
        props.model.addWriter2Fave(writer)
        console.log(props.model.faveWriters)

    }



   
        
       
    return <WritersView writerMovies={props.model.searchWriterResults} toggleCheck ={props.model.writersToggle} 
    movieClick={chooseWriterMovieACB} writerName = {props.model.currentWriter}
    faveWriterAdder = {add2FaveWriterACB} />;
}

    
    
       
    