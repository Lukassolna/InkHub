import {fetchMovieData} from "/src/movieSource.js"
import {fetchPopularMovies} from "/src/IMDBsource.js"
import { fetchMovieData1 } from "./movieSource";
import resolvePromise from "./resolvePromise";
export default {
    allMovies: [], 
    favouriteMoviesIDS:["tt1663202"],
    searchResults: [],
    faveMovies: [],
    currentMovie: null,
    currentMoviePromiseState: {},
    getResultsPromiseState: {},
    getMoviePromiseState: {},
    favouriteMoviePromiseState:{},
    searchname: "",
    searchWriterResults: [],
    searchWriter: "",
    searchOption: 1,
    allWriters: [],
    currentWriter: null,
    resultsToggle: false,
    appStartPromiseState: {},
    currentUser: null,

    

    getCurrentUser(){
        return this.currentUser.uid
    },

    setCurrentWriter(writer){
        this.currentWriter = writer
    },

    setCurrentUser(user){
        this.currentUser = user
    },

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
getSpecificMovieData(id){
    return resolvePromise(fetchMovieData(id), this.favouriteMoviePromiseState)
},
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
    
        for (var movie in this.allMovies) {
            var writers = this.allMovies[movie].Writer.split(',');
    
            for (var i = 0; i < writers.length; i++) {
                var writer = writers[i].trim(); 
    
                // To lowercase for comparison
                var writerLower = writer.toLowerCase();
    
                if (!this.allWriters.includes(writer)) {
                    this.allWriters.push(writer);
                }
    
                if (writerLower.includes(this.searchWriter.toLowerCase())) {
                    if (!this.searchedWriters.includes(writer)) {
                        this.searchedWriters.push(writer);
                    }
                }
            }
        }
    }
,
    getRandomWriter() {
        var allWriters = []; // Array to store all writers
        for (var movie in this.allMovies) {
            var writers = this.allMovies[movie].Writer.split(',');
            for (var i = 0; i < writers.length; i++) {
                var writer = writers[i].trim();
                allWriters.push(writer); 
            }
        }
        // Generate a random writer
        var randomNumber = Math.floor(Math.random() * allWriters.length);
        var randomWriter = allWriters[randomNumber]; 
    
        return randomWriter;
    },
    generateListOfWriters(){
        var writersArray = [];
        writersArray.push(this.getRandomWriter())
        writersArray.push(this.getRandomWriter())
        writersArray.push(this.getRandomWriter())
        writersArray.push(this.getRandomWriter())
        writersArray.push(this.getRandomWriter())
        return writersArray;
    }
    
    ,
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
        
        
        if (this.favouriteMoviesIDS.includes(movie)){return}
        this.favouriteMoviesIDS= [...this.favouriteMoviesIDS, movie];
        this.faveIDStoMovie()
        
    },
    faveIDStoMovie(){
        this.faveMovies=[]
        //if (this.faveMovies.includes(this.currentMoviePromiseState2)){return}
        for (var id in this.favouriteMoviesIDS){this.getSpecificMovieData(this.favouriteMoviesIDS[id])
        this.faveMovies.push(this.favouriteMoviePromiseState)
        this.favouriteMoviePromiseState = {}
        console.log(this.faveMovies)
        //this.currentMoviePromiseState2 = {}
    }},

    addToMovies(movie){
        this.allMovies= [...this.allMovies, movie];
        
    },

    removeFromFaves(movie){
        function shouldWeKeepMovieCB(movieSearched){
            console.log(movieSearched)
            console.log(movie)
            return movieSearched !== movie}
        
        this.favouriteMoviesIDS = this.favouriteMoviesIDS.filter(shouldWeKeepMovieCB);
        this.faveIDStoMovie()
    },

    setCurrentMovie(id){
        
        if (!id){return}
        this.currentMovie= id
        
        resolvePromise(fetchMovieData(id), this.currentMoviePromiseState) //detta är inte heller riktigt än
        
    },
/*
    setCurrentMovie(id){
        if (id === this.currentMovie){return}
        if (!id){return}
        this.currentMovie= id
        if (fetchMovieData(id)){ //Get Movie Details är inte en riktig funktion än
        resolvePromise(fetchMovieData(id), this.currentMoviePromiseState) //detta är inte heller riktigt än
        }
    },
    */

    setToggleTrue(){
       this.resultsToggle = true
    //console.log(this.writersToggle)  
    },

    setToggleFalse(){
        this.resultsToggle = false

    }
};