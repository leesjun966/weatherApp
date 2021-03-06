import axios from "axios";

const API_KEY = "a5b3d0e4739200bb1c4d092fe2ade224";

/**
 * To keep the rootURL in a single page for easy maintenance
 */
export default axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/forecast?q=Singapore,sg&units=metric&appid=${API_KEY}`
});
