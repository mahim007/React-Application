import {combineReducers} from "redux"
import comments from "./loadCommentsReducer";

const rootReducer = combineReducers({
    comments
}); 

export default rootReducer;