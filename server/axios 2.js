import axios from 'axios';

// Base URL to make requests to the movie database
const instance = axios.create({
  baseURL: "https://streaming-availability.p.rapidapi.com/"
});

export default instance;
