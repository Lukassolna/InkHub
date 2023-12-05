import WritersView from "../views/writersView";
import moviesToModel from "../firebaseModel.js"


export default
function Writers(props){

   
        const fetchData = () => {
            props.model.getData() 
        };

        //props.model.setSearchQuery("Django")
        //props.model.searchMovie()
        //console.log(props.model.allMovies)
        
       
    return <WritersView
      onButtonClick={fetchData}/>;
}

    
    
       
    