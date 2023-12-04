import {fetchMovieData} from "/src/movieSource.js"
import {fetchPopularMovies} from "/src/IMDBsource.js"
import resolvePromise from "./resolvePromise";
export default {
    allMovies: [], 
    favouriteMovies:[],
    searchResults: [],
    currentMovie: null,
    getResultsPromiseState: {},
    getMoviePromiseState: {},
    searchname: null,



    getData() {
        return resolvePromise( fetchPopularMovies(), this.getResultsPromiseState) // returns a promise
    },

    getMovieData() {
        return resolvePromise( fetchMovieData(), this.getMoviePromiseState) // returns a promise
    }
,
    searchMovie(titleSearch){
        for (movie in this.allMovies){
            if (movie.title.includes(this.searchname)){
                this.searchResults = [...this.searchResults, movie]
            }
        }
    }
    
    ,

    
    addToFavourites(movie){
        this.favouriteMovies= [...this.favouriteMovies, movie];
    },

    removeFromFaves(movie){
        function shouldWeKeepDishCB(movieSearched){return movieSearched.i !== movie.i}
        this.favouriteMovies= this.favouriteMovies.filter(shouldWeKeepDishCB);
    },

    setCurrentMovie(id){
        if (id === this.currentMovie){return}
        if (!id){return}
        this.currentMovie= id
        if (getMoiveDetails(id)){ //Get Movie Details är inte en riktig funktion än
        resolvePromise(getMovieDetails(id), this.currentMoviePromiseState) //detta är inte heller riktigt än
        }
    },
};
