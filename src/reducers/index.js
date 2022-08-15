import { combineReducers } from "redux";
import getAllEvents from "./getEventsReducer";

const rootReducers = combineReducers({
  events: getAllEvents,
});

export default rootReducers;
