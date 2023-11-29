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

console.log(readFromFirebase(reactiveModel))
console.log("Hej")
saveToFirebase(reactiveModel, "hello")


const app= createApp(<inkRoot model={reactiveModel} />);


app.mount("#root");
window.myModel= reactiveModel;   
