import WritersView from "../views/writersView";
import moviesToModel from "../firebaseModel.js"


export default
function Writers(props){



   
        
       
    return <WritersView writerMovies={props.model.searchWriterResults} />;
}

    
    
       
    