import { GET_WEATHER, GET_WEATHER_ERROR, SET_CURRENT_CITY } from "./constants";
import baseUrl from "../apis/baseUrl";

/**
 * Get weather information by calling with the api action
 * Error will be handled here as well such as invalid API_key, etc
 */
export const getWeather = () => async dispatch => {
  try {
    const response = await baseUrl.get();
    //Filter the redundant datas to only receive one each day
    //as free account comes with a bunch of datas for every 3hours in a day
    const filteredData = response.data.list.filter(reading =>
      reading.dt_txt.includes("09:00:00")
    );
    const city_info = response.data.city;

    dispatch({ type: GET_WEATHER, payload: filteredData });
    dispatch(setCurrentCity(city_info));
  } catch (err) {
    console.log(err.response.data.message);
    dispatch({
      type: GET_WEATHER_ERROR,
      payload: err.response.data.message
    });
  }
};

/**
 * To retrieve the information of the city
 */
export const setCurrentCity = city_info => {
  return {
    type: SET_CURRENT_CITY,
    payload: city_info
  };
};
