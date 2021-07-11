const requests = {
  // Netflix CA/US all movies
  fetchNetflixCAAllMovies = `search/basic?rapidapi-key=${process.env.API_KEY}&country=ca&service=netflix&type=movie`,
  fetchNetflixUSAllMovies = `search/basic?rapidapi-key=${process.env.API_KEY}&country=us&service=netflix&type=movie`,

  // Prime CA/US all movies
  fetchPrimeCAAllMovies = `search/basic?rapidapi-key=${process.env.API_KEY}&country=ca&service=prime&type=movie`,
  fetchPrimeUSAllMovies = `search/basic?rapidapi-key=${process.env.API_KEY}&country=us&service=prime&type=movie`,

  // Disney CA/US all movies
  fetchDisneyCAAllMovies = `search/basic?rapidapi-key=${process.env.API_KEY}&country=ca&service=disney&type=movie`,
  fetchDisneyUSAllMovies = `search/basic?rapidapi-key=${process.env.API_KEY}&country=us&service=disney&type=movie`,

  // Apple CA/US all movies
  fetchAppleCAAllMovies = `search/basic?rapidapi-key=${process.env.API_KEY}&country=ca&service=apple&type=movie`,
  fetchAppleUSAllMovies = `search/basic?rapidapi-key=${process.env.API_KEY}&country=us&service=apple&type=movie`,
}

export default requests;