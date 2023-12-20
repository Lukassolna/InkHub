import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import { fetchMovieData } from "./movieSource";
import movieModel from "./movieModel";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// you will find 2 imports already there, add the configuration and instantiate the app and database:
import firebaseConfig from "/src/firebaseConfig.js";
import resolvePromise from "./resolvePromise";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

const PATH_BASE = "users";
let currentUserUID = null;

function getUserSpecificPath(path) {
  if (currentUserUID) {
    return PATH_BASE + "/" + currentUserUID + "/" + path;
  } else {
    return PATH_BASE + "/default/" + path;
  }
}

//  PATH is the “root” Firebase path. NN is your TW2_TW3 group number
const PATH = "hool";
const Path2 = "tester";
let modelPath = "modelPath";

function modelToPersistence(model) {
  const currentMovie = model.currentMovie;
  const favouriteMoviesIDS = model.favouriteMoviesIDS;
  const faveWriters = model.faveWriters;
  const currentWriter = model.currentWriter;
  return {
    curMovie: currentMovie,
    favMovieIDS: favouriteMoviesIDS,
    favWriters: faveWriters,
    curWriter: currentWriter,
  };
}
function persistenceToModel(data, model) {
  if (!data) {
    data = {};
  }
  // Check if no data exists and set default values
  if (!data.curMovie) {
    data.curMovie = null;
  }
  if (!data.curWriter) {
    data.curWriter = null;
  }
  if (!data.favMovieIDS) {
    data.favMovieIDS = [];
  }
  if (!data.favWriters) {
    data.favWriters = [];
  }
  model.setCurrentMovie(data.curMovie);
  model.setFavouriteMoviesIDs(data.favMovieIDS);
  model.faveWriters = data.favWriters;
  model.faveIDStoMovie();
  model.setCurrentWriter(data.curWriter)
  model.searchMovieByWriter(model.currentWriter)

  return model; // Return the updated model
}
function saveIdsToFirebase(model, path) {
  //Denna används bara för att spara ID från APi nu
  return set(ref(db, Path2 + "/" + path), modelToPersistence(model));
}
function saveToFirebase(model) {
  if (model.ready) {
    const userSpecificPath = getUserSpecificPath("modelPath");
    set(ref(db, userSpecificPath), modelToPersistence(model));
  }
}

function readFromFirebase(model) {
  model.ready = false;
  const userSpecificPath = getUserSpecificPath("modelPath");

  get(ref(db, userSpecificPath))
    .then(function convertACB(snapshot) {
      return persistenceToModel(snapshot.val(), model);
    })
    .then(function setModelReadyACB() {
      model.ready = true;
    });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUserUID = user.uid;

    readFromFirebase(movieModel);
  } else {
    currentUserUID = null;
  }
});

async function readIdsFirebase(path) {
  const reference = ref(db, Path2 + "/" + path);

  try {
    const snapshot = await get(reference);

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available at path:", path);
      return null;
    }
  } catch (error) {
    console.error("Error reading from Firebase:", error);
    throw error;
  }
}



export default function connectToFirebase(model, watchFunction) {
  function watchModelProperties() {
    return [model.currentMovie, model.favouriteMoviesIDS, model.faveWriters, model.currentWriter];
  }

  function saveModelChanges() {
    saveToFirebase(model);
  }

  readFromFirebase(model);
  watchFunction(watchModelProperties, saveModelChanges);
}

export async function initialMoviesToModel() {
  try {
    let promises = [];

    for (let i = 0; i <= 100; i++) {
      promises.push(readIdsFirebase(i));
    }

    // Wait for all promises to resolve
    const allData = await Promise.all(promises);

    // Map each data to a promise returned by fetchMovieData
    const allMovieData = await Promise.all(
      allData.map((data) => fetchMovieData(data))
    );

    // allMovieData is an array of results from fetchMovieData with all the movies
    allMovieData.forEach((movieData) => {
      movieModel.addToMovies(movieData);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function finalMoviesToModel() {
  try {
    let promises = [];

    for (let i = 101; i <= 999; i++) {
      promises.push(readIdsFirebase(i));
    }

    // Wait for all promises to resolve
    const allData = await Promise.all(promises);

    // Map each data to a promise returned by fetchMovieData
    const allMovieData = await Promise.all(
      allData.map((data) => fetchMovieData(data))
    );

    // allMovieData is an array of results from fetchMovieData with all the movies
    allMovieData.forEach((movieData) => {
      movieModel.addToMovies(movieData);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
export { saveToFirebase, readFromFirebase, saveIdsToFirebase };