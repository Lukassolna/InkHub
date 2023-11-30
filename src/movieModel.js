import {fetchMovieData} from "/src/movieSource.js"
import resolvePromise from "./resolvePromise";
export default {
    movies: [], 
    currentmovie: null,
    getResultsPromiseState: {},
    searchname: null,
    


<<<<<<< HEAD

    function getData() {
        return resolvePromise( fetchMovieData(), this.getResultsPromiseState) // returns a promise
    }
;

=======
    getData() {
        return resolvePromise( fetchMovieData(), this.getResultsPromiseState) // returns a promise
    }
};
>>>>>>> c5b6dc7fac07a9fa9bdd6c817a62bbfc7f8c9a7f
