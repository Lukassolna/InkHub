import { initializeApp } from "firebase/app";
import {getDatabase, ref, get, set} from "firebase/database";
import { fetchMovieData } from "./movieSource";
import movieModel from "./movieModel";

import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, 
    onAuthStateChanged, createUserWithEmailAndPassword, signOut} from "firebase/auth";


// you will find 2 imports already there, add the configuration and instantiate the app and database:
import firebaseConfig from "/src/firebaseConfig.js";
import resolvePromise from "./resolvePromise";
const app= initializeApp(firebaseConfig);
const db= getDatabase(app);
const auth = getAuth(app);

const PATH_BASE = "users";
let currentUserUID = null;


function getUserSpecificPath(path) {
    if (currentUserUID) {
      return PATH_BASE + '/' + currentUserUID + '/' + path;
    } else {
      return null;
    }
  }
  
//  PATH is the “root” Firebase path. NN is your TW2_TW3 group number
const PATH="hool";
const Path2="tester"
let modelPath="modelPath"

function modelToPersistence(model){
    const currentMovie = model.currentMovie;
    return {
        curMovie: currentMovie, 
        
    };
}

function persistenceToModel(data, model) {
    // Check if no data exists and set default values
    if (!data) {
        data = {
            curMovie: null,
        };
    }
        model.setCurrentMovie( data.curMovie) 
      
        return model; // Return the updated model
   
}
function saveIdsToFirebase(model, path){ //Denna används bara för att spara ID från APi nu
        return set(ref(db, Path2+"/"+ path),  modelToPersistence(model));   
}
function saveToFirebase(model) {
    if (model.ready && currentUserUID) {
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
       
        readFromFirebase(movieModel); //
    } else {
        currentUserUID = null;
    }
});


/*
async function readIdsFirebase(path) {
    const reference = ref(db, Path2 + "/" + path);
    return get(reference)
        .then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                console.log('No data available at path:', path);
                return null;
            }
        })
        .catch((error) => {
            console.error('Error reading from Firebase:', error);
            throw error; 
        });
}
*/

async function readIdsFirebase(path) {
    const reference = ref(db, Path2 + "/" + path);
  
    try {
      const snapshot = await get(reference);
  
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No data available at path:', path);
        return null;
      }
    } catch (error) {
      console.error('Error reading from Firebase:', error);
      throw error;
    }
  }


export {saveToFirebase, readFromFirebase,saveIdsToFirebase};

  
export default function connectToFirebase(model, watchFunction){

    function watchModelProperties() {
        return [model.currentMovie];
      }
    
      function saveModelChanges() {
        saveToFirebase(model);
      }
    
      readFromFirebase(model);
      watchFunction(watchModelProperties, saveModelChanges);
}
/*
export  function  connectToFirebaseOriginal(model, watchFunction){
    
    readFromFirebase(model)
    watchFunction(arrayACB, onArrayACB)

    function arrayACB(){
        console.log("Check for Change")
        return ["hello"]
    }
    
    function onArrayACB(){
        console.log("Save to Firebase")
        saveToFirebase(model)
    }
}
*/
;
export async function initialMoviesToModel() {
    try {
      let promises = [];
  
      for (let i = 0; i <= 800; i++) {
        promises.push(readIdsFirebase(i));
      }
      
      // Wait for all promises to resolve
      const allData = await Promise.all(promises);
  
      // Map each data to a promise returned by fetchMovieData
      const allMovieData = await Promise.all(allData.map(data => fetchMovieData(data)));
  
      // allMovieData is an array of results from fetchMovieData with all the movies
      allMovieData.forEach(movieData => {
        movieModel.addToMovies(movieData);
      });
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    //console.log(movieModel.allMovies)
  }

  export async function finalMoviesToModel() {
    try {
      let promises = [];
  
      for (let i = 801; i <= 999; i++) {
        promises.push(readIdsFirebase(i));
      }
      
      // Wait for all promises to resolve
      const allData = await Promise.all(promises);
  
      // Map each data to a promise returned by fetchMovieData
      const allMovieData = await Promise.all(allData.map(data => fetchMovieData(data)));
  
      // allMovieData is an array of results from fetchMovieData with all the movies
      allMovieData.forEach(movieData => {
        movieModel.addToMovies(movieData);
      });
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    //console.log(movieModel.allMovies)
  }
  
/*
export async function moviesToModel(){
let promises = [];


for (let i = 0; i <= 10; i++) {
    promises.push(readIdsFirebase(i));
}
Promise.all(promises)
    .then(allData => {
        // Map each data  to a promise returned by fetchMovieData
        return Promise.all(allData.map(data => fetchMovieData(data)));
    })
    await (allMovieData => {
        //  allMovieData is an array of results from fetchMovieData with all the movies
        allMovieData.forEach(movieData => {
            
            
            movieModel.addToMovies(movieData)
            
           
        
        });
    

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });  
    
    
    
    
}

*/