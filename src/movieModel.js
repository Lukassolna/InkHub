import {fetchMovieData} from "/src/movieSource.js"
import resolvePromise from "./resolvePromise";
export default {
    movies: [], 
    currentmovie: null,
    getResultsPromiseState: {},
    searchname: null,
    


    getData() {
        return resolvePromise( fetchMovieData(), this.getResultsPromiseState) // returns a promise
    }
};
