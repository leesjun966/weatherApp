import { combineReducers } from "redux";
import datasReducer from "./datasReducer";
import cityReducer from "./cityReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  datas: datasReducer,
  city: cityReducer,
  error: errorReducer
});
