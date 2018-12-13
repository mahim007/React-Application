import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const initialState={};
const middleWear=[thunk];
const store = createStore(rootReducer, initialState, applyMiddleware(...middleWear));

export default store;