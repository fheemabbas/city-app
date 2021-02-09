import { combineReducers } from "redux";
import ReducerData from "./redux";
import ReducerPageData from "./pageReducer";

export default combineReducers({
  data: ReducerData, // Storing All Cart Data
  page: ReducerPageData,
});
