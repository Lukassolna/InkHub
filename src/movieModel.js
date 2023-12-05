import {fetchMovieData} from "/src/movieSource.js"
import {fetchPopularMovies} from "/src/IMDBsource.js"
import resolvePromise from "./resolvePromise";
export default {
    allMovies: [], 
    favouriteMovies:[],
    searchResults: [],
    currentMovie: null,
    currentMoviePromiseState: {},
    getResultsPromiseState: {},
    getMoviePromiseState: {},

    searchname: "",



    getData() {
        return resolvePromise( fetchPopularMovies(), this.getResultsPromiseState) // returns a promise
    },

    getMovieData() {
        return resolvePromise( fetchMovieData(), this.getMoviePromiseState) // returns a promise
    }
,
getCurrentMovieData() {
    return resolvePromise( fetchMovieData(this.currentMovie), this.getMoviePromiseState) // returns a promise
}
,
    searchMovie(titleSearch){
        this.searchResults = []
        
        for (var movie in this.allMovies){
            //console.log(this.allMovies[movie].Title)
            
            if (this.allMovies[movie].Title.toLowerCase().includes(this.searchname.toLowerCase())){this.searchResults = [...this.searchResults, this.allMovies[movie].Title]}
        }  
        console.log("SEARCHED: "+this.searchResults)}
    ,

    setSearchQuery(titleSearch){
        this.searchname = titleSearch
    }
    ,

    
    addToFavourites(movie){
        this.favouriteMovies= [...this.favouriteMovies, movie];
    },

    addToMovies(movie){
        this.allMovies= [...this.allMovies, movie];
        
    },

    removeFromFaves(movie){
        function shouldWeKeepDishCB(movieSearched){return movieSearched.i !== movie.i}
        this.favouriteMovies= this.favouriteMovies.filter(shouldWeKeepDishCB);
    },

    setCurrentMovie(id){
        if (id === this.currentMovie){return}
        if (!id){return}
        this.currentMovie= id
        //if (fetchMovieData(id)){ Get Movie Details är inte en riktig funktion än resolvePromise(fetchMovieData(id), this.currentMoviePromiseState) //detta är inte heller riktigt   }
    },
};