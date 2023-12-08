import inkRoot from "./inkRoot";
import resolvePromise from "./resolvePromise.js";
import { fetchMovieData } from "./movieSource.js";

import{makeRouter} from "./inkRoot.jsx";
import { reactive , createApp} from "vue";
//const reactiveModel= reactive(model);
import model from "./movieModel.js";

const reactiveModel= reactive(model);

//import  "/src/firebaseModel.js"
import connectToFirebase, { saveToFirebase } from "./firebaseModel.js";
import {watch} from "vue";
import { readFromFirebase, moviesToModel } from "./firebaseModel.js";

connectToFirebase(reactiveModel, watch)

async function testing(){await moviesToModel()}

function startApp() {
    const app = createApp(<inkRoot model={reactiveModel} />);
    app.use(makeRouter(reactiveModel));
    app.mount("#root");
    window.myModel = reactiveModel;   
  }
  
  testing().then(startApp);
  
