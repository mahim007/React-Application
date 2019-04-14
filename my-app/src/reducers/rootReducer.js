import {combineReducers} from "redux";
import counter from "./counterReducer";
import review from './reviewReducer';

export default combineReducers({
    counter,
    review
});
