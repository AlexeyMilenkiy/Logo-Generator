import { combineReducers } from "redux";
import mainReducers from "./mainReducer";

export default combineReducers({
  main: mainReducers
});
