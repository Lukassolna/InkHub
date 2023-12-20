import inkRoot from "./inkRoot";
import resolvePromise from "./resolvePromise.js";
import { fetchMovieData } from "./movieSource.js";

import { makeRouter } from "./inkRoot.jsx";
import { reactive, createApp } from "vue";
//const reactiveModel= reactive(model);
import model from "./movieModel.js";

const reactiveModel = reactive(model);

//import  "/src/firebaseModel.js"
import connectToFirebase, {
  finalMoviesToModel,
  initialMoviesToModel,
  saveToFirebase,
} from "./firebaseModel.js";
import { watch } from "vue";
import { readFromFirebase } from "./firebaseModel.js";

function representMovies() {
  for (var id in model.favouriteMoviesIDS) {
    model.getSpecificMovieData(model.favouriteMoviesIDS[id]);

    model.faveIDStoMovie();
  }
}
representMovies();

async function initialLoad() {
  await initialMoviesToModel();
}

async function finalLoad() {
  await finalMoviesToModel();
}

function startApp() {
  const app = createApp(<inkRoot model={reactiveModel} />);
  app.use(makeRouter(reactiveModel));
  app.mount("#root");
  window.myModel = reactiveModel;
  connectToFirebase(reactiveModel, watch);
}
initialLoad().then(startApp).then(finalLoad);
