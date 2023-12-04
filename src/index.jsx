import inkRoot from "./inkRoot";


import { reactive , createApp} from "vue";
//const reactiveModel= reactive(model);
import model from "./movieModel.js";

const reactiveModel= reactive(model);

//import  "/src/firebaseModel.js"
import connectToFirebase, { saveToFirebase } from "./firebaseModel.js";
import {watch} from "vue";
import { readFromFirebase } from "./firebaseModel.js";

connectToFirebase(reactiveModel, watch)



const app= createApp(<inkRoot model={reactiveModel} />);

import{makeRouter} from "./inkRoot.jsx";
app.use(makeRouter(reactiveModel));


app.mount("#root");
window.myModel= reactiveModel;   

model.setSearchQuery("Rev")
model.searchMovie()

