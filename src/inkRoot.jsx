import HomePage from "./presenters/homePagePresenter";
import Movie from "./presenters/moviePresenter";
import SearchResult from "./presenters/searchResultPresenter";
import Auth from "./presenters/authPresenter";
import User from "./presenters/userPresenter";
import Writers from "./presenters/writersPresenter";
import { RouterView, createRouter, createWebHashHistory } from "vue-router";
import "/src/admin.css";
import WritersView from "./views/writersView";

export default
function inkRoot(props){

  return (  
    <div>
      <div class="authBar">
        <Auth/>
      </div>
      <div class="homepage">

          <RouterView model={props.model}/>
          {/*<Movie/>
          <SearchResult/>
          <User/>
          <Writers/>
        
        */}
    
          
      </div>
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


/*
const = VueRoot={'
  setup(){
    
    return function renderACB(){
      if(myModel.user === undefiend)
        return <img src="https://brfenergi.se/iprog/loading.gif"></img>
      
      if(myModel.user === null)
        return <Auth auth={auth}/>;

      return (
        "!"myModel.ready && <img src="https://brfenergi.se/iprog/loading.gif"></img>
        <div class="homepage" >
          <HomePage>
        </div>

      )
    }
  }

}
  */