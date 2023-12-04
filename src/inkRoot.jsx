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

       

        <RouterView model={props.model}/>
         {/*<Movie/>
        <SearchResult/>
        <User/>
        <Writers/>
       
       */}
  
        
    </div>
    )

}



function makeRouter(props){
    const routes = [{
    path: "/",
    component: <HomePage model={props.model} /> ,
  },{ 
    path: "/movie",
    component: <Movie model={props.model}/>,
  },
  { 
    path: "/writers",
    component: <Writers/>,
  },
  { 
    path: "/results",
    component: <SearchResult/>,
  }]
  
  return createRouter({
    history: createWebHashHistory(),
    routes
  })
  }
  
  export {makeRouter}