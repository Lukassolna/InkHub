import { initializeApp } from "firebase/app";
import {getDatabase, ref, get, set} from "firebase/database";


// you will find 2 imports already there, add the configuration and instantiate the app and database:
import firebaseConfig from "/Users/stefanivchenko/project-group37-InkHub/src/firebaseConfig.js";
const app= initializeApp(firebaseConfig);
const db= getDatabase(app);

//  PATH is the “root” Firebase path. NN is your TW2_TW3 group number
const PATH="hool";
const Path2="tester"


set(ref(db, PATH+"/test2"), "niklas");



const model=  { 
    somePromiseState:{}, 
};



function modelToPersistence(model1){
    
    
    
        return  model1
            

            
    
    
  
                                            
};


function persistenceToModel(data, model){
    
    return "p2m"
       

    


    

       }




function saveToFirebase(model){
    

    // TODO
    
        return set(ref(db, Path2+"/test"),  modelToPersistence(model));
    
}
function readFromFirebase(model){
    model.ready = false;
    get(ref(db, PATH+"/test")).then(function convertACB(snapshot){
        return persistenceToModel(snapshot.val(), model)
    }).then(function setModelReady(){
        return model.ready = true
    })
    return(model.data)
    

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
    stryka: "Gigantisk",
    färg:"grön",
    smarthet:"låg",
}
saveToFirebase(Hulken);
console.log(readFromFirebase(Hulken));
