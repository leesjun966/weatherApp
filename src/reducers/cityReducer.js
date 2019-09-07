import { SET_CURRENT_CITY } from "../actions/constants";

/**
 * To update the state of city information
 */
export default (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_CITY:
      return action.payload;

    default:
      return state;
  }
};
