console.log("Y'ello!");
console.log("what");

(async () => {
    const url = 'https://imdb188.p.rapidapi.com/api/v1/getPopularMovies';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
      },
      body: JSON.stringify({
        // your body object
      })
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json(); 
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  })();
  
