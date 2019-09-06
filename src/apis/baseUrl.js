import axios from "axios";

const API_KEY = "a5b3d0e4739200bb1c4d092fe2ade224";

/**
 * To handle the rootURL in a single page
 */
export default axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/forecast?q=Singapore&units=metric&appid=${API_KEY}`
});
