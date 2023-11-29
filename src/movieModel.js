import {fetchMovieData} from "/src/movieSource.js"
export default {
    data: null, 

    getData() {
        return fetchMovieData() // returns a promise
            .then(data => {
                this.data = data; // Store the data
              
                return data; 
            })
            .catch(error => { //Handle the error
                console.error('Error:', error);
                throw error; 
            });
    }
};
