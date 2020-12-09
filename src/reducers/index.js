import { combineReducers } from "redux";
import { value } from "./value";

const allReducers = combineReducers(
  {
    value
  }
);


export default allReducers;