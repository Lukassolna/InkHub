import {fetchMovieData} from "/src/movieSource.js"
import resolvePromise from "./resolvePromise";
export default {
    data: null,
    getResultsPromiseState: {},
    currentMoviePromiseState: {}, 

    getData() {
        return resolvePromise( fetchMovieData(), this.getResultsPromiseState) // returns a promise
    }
};
