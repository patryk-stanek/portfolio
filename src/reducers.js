//Importing methods
import { combineReducers } from "redux";

//Importing reducers
import projectsReducer from "./components/Projects/Projects.reducer";

//Combining reducers
const reducers = combineReducers({
    projectsReducer,
});

export default reducers;