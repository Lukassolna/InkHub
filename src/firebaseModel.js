import { initializeApp } from "firebase/app";
import {getDatabase, ref, get, set} from "firebase/database";
import { fetchMovieData } from "./movieSource";
import movieModel from "./movieModel";




// you will find 2 imports already there, add the configuration and instantiate the app and database:
import firebaseConfig from "/src/firebaseConfig.js";
import resolvePromise from "./resolvePromise";
const app= initializeApp(firebaseConfig);
const db= getDatabase(app);

//  PATH is the “root” Firebase path. NN is your TW2_TW3 group number
const PATH="hool";
const Path2="tester"

let promiseState = {
    promise: null,
    data: null,
    error: null
};




const model=  { 
    somePromiseState:{}, 
};

function modelToPersistence(model1){
    
    
    
        return  model1
                                     
};


function persistenceToModel(data,model){
   
    return "p2m"
   

       }




function saveToFirebase(model, path){ //Denna används bara för att spara ID från APi nu
        return set(ref(db, Path2+"/"+ path),  modelToPersistence(model));
    
}
function readFromFirebase(model, path){ //Denna måste vi ändra (används för modellen)
    model.ready = false;
    
    get(ref(db, Path2+"/"+path)).then(function convertACB(snapshot){
        
        return persistenceToModel(snapshot.val(),model)
    }).then(function setModelReady(){
        
        return model.ready = true
       
    })
   
 
    // TODO
}



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






export {saveToFirebase, readFromFirebase};
export default function  connectToFirebase(model, watchFunction){
    


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
;
export async function moviesToModel() {
    try {
      let promises = [];
  
      for (let i = 0; i <= 999; i++) {
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