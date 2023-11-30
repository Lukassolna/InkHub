import { initializeApp } from "firebase/app";
import {getDatabase, ref, get, set} from "firebase/database";


// you will find 2 imports already there, add the configuration and instantiate the app and database:
import firebaseConfig from "/src/firebaseConfig.js";
const app= initializeApp(firebaseConfig);
const db= getDatabase(app);

//  PATH is the “root” Firebase path. NN is your TW2_TW3 group number
const PATH="hool";
const Path2="tester"





const model=  { 
    somePromiseState:{}, 
};

function modelToPersistence(model1){
    
    
    
        return  model1
                                     
};


function persistenceToModel(data,model){
    console.log(data)
    return "p2m"
   

       }




function saveToFirebase(model, path){
    

        return set(ref(db, Path2+"/"+ path),  modelToPersistence(model));
    
}
function readFromFirebase(model, path){
    model.ready = false;
    
    get(ref(db, Path2+"/"+path)).then(function convertACB(snapshot){
        
        return persistenceToModel(snapshot.val(),model)
    }).then(function setModelReady(){
        
        return model.ready = true
       
    })
   
 
    // TODO
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
    ids: ["tt0090022","tt0108358","tt0107688"]    
}
//saveToFirebase(Hulken);


console.log(readFromFirebase(Hulken, ));