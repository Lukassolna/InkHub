import {fetchMovieData} from "/src/movieSource.js"
import resolvePromise from "./resolvePromise";
export default {
    allMovies: [], 
    favouriteMovies:[],
    currentmovie: null,
    getResultsPromiseState: {},
    searchname: null,

    


    getData() {
        return resolvePromise( fetchMovieData(), this.getResultsPromiseState) // returns a promise
    },
    addToFavourites(movie){
        this.favouriteMovies= [...this.favouriteMovies, movie];
    },

    removeFromFaves(movie){
        function shouldWeKeepDishCB(movieSearched){return movieSearched.i !== movie.i
        }
        this.favouriteMovies= this.favouriteMovies.filter(shouldWeKeepDishCB);
    },

};
