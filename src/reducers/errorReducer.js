import { GET_WEATHER_ERROR } from "../actions/constants";

/**
 * To update the state of error information
 */
export default (state = {}, action) => {
  switch (action.type) {
    case GET_WEATHER_ERROR:
      return action.payload;
    default:
      return state;
  }
};
