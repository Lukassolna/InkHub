import {fetchMovieData} from "/src/movieSource.js"
export default {
    currentMovie: null, 
    moviesids: [],
    currentDishPromiseState: {},
    searchquery: null,
    searchResultsPromiseState: {},


    getData() {
        return fetchMovieData() // returns a promise
            .then(data => {
                this.data = data; // Store the data
              
                return data; 
            })
            .catch(error => { //Handle the error
                console.error('Error:', error);
                throw error; 
            });
    }
};
