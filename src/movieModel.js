import { fetchMovieData } from "/src/movieSource.js";
import { fetchPopularMovies } from "/src/IMDBsource.js";
import { fetchMovieData1 } from "./movieSource";
import resolvePromise from "./resolvePromise";
import { initializeApp } from "firebase/app";
import config from "/src/firebaseConfig.js";
import { nameToNumber } from "./writerpictures";


export default {
  currentUser: null,
  currentMovie: null,
  currentWriter: null,
  allMovies: [],
  favouriteMoviesIDS: [],
  searchResults: [],
  faveMovies: [],
  faveWriters: [],
  generatedWriterList: [],
  searchWriterResults: [],
  allWriters: [],
  currentMoviePromiseState: {},
  getResultsPromiseState: {},
  getMoviePromiseState: {},
  favouriteMoviePromiseState: {},
  appStartPromiseState: {},
  searchname: "",
  searchWriter: "",
  searchOption: 1,
  writersToggle: false,
  moviesToggle: false,
  backWriterToggle: false,
  app: initializeApp(config),

  getCurrentUser() {
    return this.currentUser.uid;
  },

  setCurrentWriter(writer) {
    this.currentWriter = writer;
  },

  setFavouriteMoviesIDs(ids) {
    this.favouriteMoviesIDS = ids;
  },

  setCurrentUser(user) {
    this.currentUser = user;
  },

  getData() {
    return resolvePromise(fetchPopularMovies(), this.getResultsPromiseState); // returns a promise
  },

  getMovieData() {
    return resolvePromise(fetchMovieData(), this.getMoviePromiseState); // returns a promise
  },
  getCurrentMovieData() {
    return resolvePromise(
      fetchMovieData(this.currentMovie),
      this.getMoviePromiseState
    ); // returns a promise
  },
  getSpecificMovieData(id) {
    return resolvePromise(fetchMovieData(id), this.favouriteMoviePromiseState);
  },
  searchMovie() {
    this.searchResults = [];

    for (var movie in this.allMovies) {
      if (
        this.allMovies[movie].Title.toLowerCase().includes(
          this.searchname.toLowerCase()
        )
      ) {
        this.searchResults = [
          ...this.searchResults,
          [
            this.allMovies[movie].Title,
            this.allMovies[movie].Poster,
            this.allMovies[movie].Writer,
            this.allMovies[movie].imdbID,
          ],
        ];
      }
    }
  },
  setSearchQuery(titleSearch) {
    this.searchname = titleSearch;
  },
  setSearchWriterQuery(writerSearch) {
    this.searchWriter = writerSearch;
  },

  searchWriters() {
    this.allWriters = [];
    this.searchedWriters = [];
    this.searchWriterResults = [];

    for (var movie in this.allMovies) {
      var writers = this.allMovies[movie].Writer.split(",");

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
  },
  getRandomWriter() {
    var allWriters = []; // Array to store all writers
    for (var movie in this.allMovies) {
      var writers = this.allMovies[movie].Writer.split(",");
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
  generateListOfWriters() {
    if (this.generatedWriterList.length >= 2) {
      return this.generatedWriterList;
    }
    var writersArray = [];
    var writerNumber = [];
    for (let k = 0; k < 5; k++) {
      let randomDude = this.getRandomWriter();

      while (writerNumber.includes(nameToNumber(randomDude))) {
        randomDude = this.getRandomWriter();
      }
      writersArray.push(randomDude);
      writerNumber.push(nameToNumber(randomDude));
    }

    this.generatedWriterList = writersArray;

    return this.generatedWriterList;
  },

  searchMovieByWriter(inputWriter) {
    this.searchWriterResults = [];

    for (var movie in this.allMovies) {
      // loop through all the movies
      var writers = this.allMovies[movie].Writer.split(",");

      for (var i = 0; i < writers.length; i++) {
        //loop through the writers inside every movie
        var writer = writers[i].trim();

        if (writer.toLowerCase().includes(inputWriter.toLowerCase())) {
          // If the writer matches the inputWriter, push movies to result

          this.searchWriterResults.push(this.allMovies[movie]);
        }
      }
    }

    //HEY
  },

  addToFavourites(movie) {
    if (this.favouriteMoviesIDS.includes(movie)) {
      return;
    }
    this.favouriteMoviesIDS = [...this.favouriteMoviesIDS, movie];
    this.faveIDStoMovie();
  },
  faveIDStoMovie() {
    this.faveMovies = [];
    
    for (var id in this.favouriteMoviesIDS) {
      this.getSpecificMovieData(this.favouriteMoviesIDS[id]);
      this.faveMovies.push(this.favouriteMoviePromiseState);
      this.favouriteMoviePromiseState = {};

      
    }
  },

  addToMovies(movie) {
    this.allMovies = [...this.allMovies, movie];
  },

  removeFromFaves(movie) {
    function shouldWeKeepMovieCB(movieSearched) {
      return movieSearched !== movie;
    }

    this.favouriteMoviesIDS =
      this.favouriteMoviesIDS.filter(shouldWeKeepMovieCB);
    this.faveIDStoMovie();
  },

  addWriter2Fave(writer) {
    if (this.faveWriters.includes(writer)) {
      return;
    }
    this.faveWriters = [...this.faveWriters, writer];
  },

  removeFromFaveWriters(writer) {
    function shouldWeKeepWriterCB(writerSearched) {
      return writerSearched !== writer;
    }

    this.faveWriters = this.faveWriters.filter(shouldWeKeepWriterCB);
  },

  setCurrentMovie(id) {
    if (!id) {
      return;
    }
    this.currentMovie = id;
    if (fetchMovieData(id)) {
      
      resolvePromise(fetchMovieData(id), this.currentMoviePromiseState); 
    }
  },

  setWritersToggleTrue() {
    this.writersToggle = true;
  },

  setWritersToggleFalse() {
    this.writersToggle = false;
  },

  setMoviesToggleTrue() {
    this.moviesToggle = true;
  },

  setMoviesToggleFalse() {
    this.moviesToggle = false;
  },
  setBackWriterToggleTrue() {
    this.backWriterToggle = true;
  },

  setBackWriterToggleFalse() {
    this.backWriterToggle = false;
  },
};
