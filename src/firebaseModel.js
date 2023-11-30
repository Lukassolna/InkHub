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
    id:""
};

function modelToPersistence(model1){
    
    
    
        return  model1
                                     
};


function persistenceToModel(data,model){
    
    return data
   

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
let global = {
    id:""
}

function readIdsFirebase(model, path){ //Denne använder vi BARA till att hämta och mactha ids
    model.ready = false; //TODO remove model from this function
    
    get(ref(db, Path2+"/"+path)).then(function convertACB(snapshot){
        
        return persistenceToModel(snapshot.val(),model)
    }).then(function setModelReady(){
        
        return model.ready = true
    })
}





export {saveToFirebase, readFromFirebase};
export default function connectToFirebase(model, watchFunction){


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

const Hulken ={
    
}
const Hulken2 ={
    
}
saveToFirebase(Hulken);



for (let i = 0; i < 10; i++) {
    console.log(resolvePromise(fetchMovieData(readIdsFirebase(Hulken, i)), model.somePromiseState))
  }