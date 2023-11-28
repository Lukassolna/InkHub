import HomePage from "./presenters/homePagePresenter";
import Movie from "./presenters/moviePresenter";
import SearchResult from "./presenters/searchResultPresenter";
import User from "./presenters/userPresenter";
import Writers from "./presenters/writersPresenter";


export default
function inkRoot(props){

    return (  
    <div>

        <HomePage/>
        <Movie/>
        <SearchResult/>
        <User/>
        <Writers/>
        
    </div>

    )

}
  