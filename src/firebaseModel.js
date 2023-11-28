import { initializeApp } from "firebase/app";
import {getDatabase, ref, get, set} from "firebase/database";

// you will find 2 imports already there, add the configuration and instantiate the app and database:
import firebaseConfig from "/Users/stefanivchenko/project-group37-InkHub/src/firebaseConfig.js";
const app= initializeApp(firebaseConfig);
const db= getDatabase(app);

//  PATH is the “root” Firebase path. NN is your TW2_TW3 group number
const PATH="hool";


set(ref(db, PATH+"/test"), "dummy");