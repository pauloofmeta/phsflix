import { combineReducers } from "redux";

import movieFilter from "./movieFilterReducer";

const rootReducer = combineReducers({
    movieFilter
});

export default rootReducer;