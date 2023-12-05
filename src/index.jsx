import inkRoot from "./inkRoot";
import resolvePromise from "./resolvePromise.js";


import { reactive , createApp} from "vue";
//const reactiveModel= reactive(model);
import model from "./movieModel.js";

const reactiveModel= reactive(model);

//import  "/src/firebaseModel.js"
import connectToFirebase, { saveToFirebase } from "./firebaseModel.js";
import {watch} from "vue";
import { readFromFirebase, moviesToModel } from "./firebaseModel.js";

connectToFirebase(reactiveModel, watch)


await moviesToModel()
//console.log(model.allMovies)
model.searchMovie()

const app= createApp(<inkRoot model={reactiveModel} />);

import{makeRouter} from "./inkRoot.jsx";
app.use(makeRouter(reactiveModel));


app.mount("#root");
window.myModel= reactiveModel;   




