import inkRoot from "./inkRoot";

import { reactive , createApp} from "vue";
//const reactiveModel= reactive(model);
import model from "./movieModel.js";

const reactiveModel= reactive(model);


const app= createApp(<inkRoot model={reactiveModel} />);


app.mount("#root");
window.myModel= reactiveModel;   
