
import { API_KEY } from './apiConfig.js';
import { saveIdsToFirebase } from "./firebaseModel.js";
export function fetchPopularMovies() {
    const url = 'https://imdb188.p.rapidapi.com/api/v1/getPopularMovies';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
        },
        body: JSON.stringify({
            country: {
                anyPrimaryCountries: []
            },
            limit: 1000,
            releaseDate: {
                releaseDateRange: {
                    end: '2020-12-31',
                    start: '1960-01-01'
                }
            },
            userRatings: {
                aggregateRatingRange: { max: 10, min: 0 },
                ratingsCountRange: { min: 0 }
            },
            genre: {
                allGenreIds: ['Western']
            },
            runtime: {
                runtimeRangeMinutes: { max: 240, min: 0 }
            }
        })
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            return response.json();
        })
        .then(result => {
           
            for( let movie in result.data.list){
            saveIdsToFirebase(result.data.list[movie].title.id, movie); 
            }
            return result;
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}
