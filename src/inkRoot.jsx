import HomePage from "./presenters/homePagePresenter";
import Movie from "./presenters/moviePresenter";
import SearchResult from "./presenters/searchResultPresenter";
import Auth from "./presenters/authPresenter";
import User from "./presenters/userPresenter";
import Writers from "./presenters/writersPresenter";
import WritersResult from "./presenters/writersResultPresenter";
import { RouterView, createRouter, createWebHashHistory } from "vue-router";
import "/src/admin.css";
import WritersView from "./views/writersView";

export default
function inkRoot(props){
/*
  if(!props.model.ready) {
    //connectToFirebase(props.model, watch)

    return <img src = {"https://static.wikia.nocookie.net/dont-starve-game/images/8/84/Tumbleweed_move_down.gif"}></img>
  }    
*/
  return (  
    <div class="homepage">
      <div class="authBar">
        <Auth model={props.model}/>
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
    path: "/user",
    component: <User model={props.model}/>
  },
  
  { 
    path: "/writer",
    component: <Writers/>,
  },
  { 
    path: "/user",
    component: <User model={props.model}/>,
  },
  { 
    path: "/movieresults",
    component: <SearchResult model={props.model}/>,
  },
  { 
    path: "/writersresults",
    component: <WritersResult model={props.model}/>,
  }]
  
  return createRouter({
    history: createWebHashHistory(),
    routes
  })
  }

  export {makeRouter}


/* Se här för hur vi ska sätta upp ordningen i render
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