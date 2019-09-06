import { GET_WEATHER, GET_WEATHER_ERROR } from "./constants";
import baseUrl from "../apis/baseUrl";

export const getWeather = () => async dispatch => {
  const response = await baseUrl.get();
  const filteredData = response.data.list.filter(reading =>
    reading.dt_txt.includes("18:00:00")
  );

  dispatch({ type: GET_WEATHER, payload: filteredData });
};
