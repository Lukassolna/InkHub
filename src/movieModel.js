import {fetchMovieData} from "/src/movieSource.js"
import {fetchPopularMovies} from "/src/IMDBsource.js"
import resolvePromise from "./resolvePromise";
export default {
    movies: [], 
    currentmovie: null,
    getResultsPromiseState: {},
    searchname: null,



    getData() {
        return resolvePromise( fetchPopularMovies(), this.getResultsPromiseState) // returns a promise
    }
};
