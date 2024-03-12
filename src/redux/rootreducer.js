import { combineReducers } from "redux";
import reducer from "./counterreducer";
const rootReducer = combineReducers({
counte:reducer
})
export default rootReducer;