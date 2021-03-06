import { GET_WEATHER } from "../actions/constants";

/**
 * To update the state of datas information
 */
export default (state = {}, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return action.payload;
    default:
      return state;
  }
};
