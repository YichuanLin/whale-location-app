import { combineReducers } from "redux";
import whaleListReducer from "./whale-list";
import whaleDetailReducer from "./whale-detail";

export const rootReducer = combineReducers({
  whaleList: whaleListReducer,
  whaleDetail: whaleDetailReducer
});
