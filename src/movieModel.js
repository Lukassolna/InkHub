import {fetchMovieData} from "/src/movieSource.js"
import {fetchPopularMovies} from "/src/IMDBsource.js"
import { fetchMovieData1 } from "./movieSource";
import resolvePromise from "./resolvePromise";
export default {
    allMovies: [], 
    favouriteMovies:[],
    searchResults: [],
    currentMovie: null,
    currentMoviePromiseState: {},
    getResultsPromiseState: {},
    getMoviePromiseState: {},
    currentMoviePromiseState:{},
    searchname: "",
    searchWriterResults: [],
    searchWriter: "",
    allWriters: [],


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
    searchMovie(){
        this.searchResults = []
        
        for (var movie in this.allMovies){
            //console.log(this.allMovies[movie].Title)
            
            if (this.allMovies[movie].Title.toLowerCase().includes(this.searchname.toLowerCase())){this.searchResults = [...this.searchResults, [this.allMovies[movie].Title, this.allMovies[movie].Poster, this.allMovies[movie].Writer,this.allMovies[movie].imdbID ]]}
        }  
        console.log("SEARCHED: "+this.searchResults)}
    ,

    setSearchQuery(titleSearch){
        this.searchname = titleSearch
    }
    ,
    setSearchWriterQuery(writerSearch){
        this.searchWriter = writerSearch;
    },
    
    searchWriters() {
        this.allWriters = []; 
        this.searchedWriters = []; 
        this.searchWriterResults = [];
    
        for (var movie in this.allMovies) {     // loop through all the movies
            var writers = this.allMovies[movie].Writer.split(',');
    
            for (var i = 0; i < writers.length; i++) { //loop through the writers inside every movie
                var writer = writers[i].trim();
    
                if (!this.allWriters.includes(writer)) { // add it to allWriters (remove duplicates)
                    this.allWriters.push(writer);
                }
    
                if (writer.toLowerCase().includes(this.searchWriter.toLowerCase())) { 
                    this.searchedWriters.push(writer); 
                   
                }
            }
        }
    },
        searchMovieByWriter(inputWriter){

            this.searchWriterResults = []; 

            for (var movie in this.allMovies) {     // loop through all the movies
                var writers = this.allMovies[movie].Writer.split(',');
        
                for (var i = 0; i < writers.length; i++) { //loop through the writers inside every movie
                    var writer = writers[i].trim();
        
                    if (writer.toLowerCase().includes(inputWriter.toLowerCase())) {  // If the writer matches the inputWriter, push movies to result
                     
                        this.searchWriterResults.push(this.allMovies[movie]);
                    }
                }
            }
        
    
       
        
      
    },
    



   


    
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
        if (fetchMovieData(id)){ //Get Movie Details är inte en riktig funktion än
        resolvePromise(fetchMovieData(id), this.currentMoviePromiseState) //detta är inte heller riktigt än
        }
    },
};