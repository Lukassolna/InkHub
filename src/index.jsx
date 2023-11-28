import inkRoot from "./inkRoot";

import { reactive , createApp} from "vue";
//const reactiveModel= reactive(model);





const app= createApp(<inkRoot />);


app.mount("#root");

