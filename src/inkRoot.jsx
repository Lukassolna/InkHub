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

        <HomePage/>
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