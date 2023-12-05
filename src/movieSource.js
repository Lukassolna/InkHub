import {BASE_URL, API_KEY} from "./apiConfig.js";
import { saveToFirebase } from "./firebaseModel.js";
/*
export function fetchMovieData(id) {
    const url = 'https://movie-database-alternative.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
        }
    };

    return fetch(url+"?i="+id, options)
        (response => { 
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            return response.json();
        })
        .then(result => {   
            console.log(result);    //log the result in console
            saveToFirebase(result); //save to firebase
            return result;
        })
        
        .catch(error => {
            console.error('Error occurred:', error);
        });
}
*/
export async function fetchMovieData(id) {
    const url = 'https://movie-database-alternative.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
      },
    };
  
    try {
      const response = await fetch(url + "?i=" + id, options);
  
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
  
      const result = await response.json();
      //console.log(result); // log the result in the console
      saveToFirebase(result); // save to firebase
  
      return result;
    } catch (error) {
      console.error('Error occurred:', error);
      throw error;
    }
  }
  