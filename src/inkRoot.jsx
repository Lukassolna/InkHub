import HomePage from "./presenters/homePagePresenter";
import Movie from "./presenters/moviePresenter";
import SearchResult from "./presenters/searchResultPresenter";
import User from "./presenters/userPresenter";
import Writers from "./presenters/writersPresenter";
import { RouterView, createRouter, createWebHashHistory } from "vue-router";
import "/src/admin.css";

export default
function inkRoot(props){

    return (  
    <div class="homepage">

        <Writers/>
         {/*<Movie/>
        <SearchResult/>
        <User/>
        <Writers/>
       
        <RouterView />*/}
  
        
    </div>
    )

}



function makeRouter(props){
    const routes = [{
    path: "/",
    component: <HomePage/> ,
  },{ 
    path: "/movie",
    component: <Movie/>,
  }]
  
  return createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  }
  
  export {makeRouter}
  